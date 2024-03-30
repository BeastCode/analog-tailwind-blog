import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { injectContentFiles } from '@analogjs/content';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BlogPost, Topic } from '../../models/post';
import { AppStateService } from '../../services/app.store.service';
import { Subscription } from 'rxjs';
type CategoriesMap = { name: string; posts: any[] }[];

@Component({
  standalone: true,
  imports: [NgFor, RouterLink, AsyncPipe],
  // providers: [AppStateService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div *ngFor="let category of filteredCategories">
      <div class="text-xl font-bold">{{ category.name }}</div>
      <ul>
        <li *ngFor="let post of category.posts">
          <div (click)="onBlogPostClicked(post)">
            {{ post.attributes.title }}
          </div>
        </li>
      </ul>
    </div>
  `,
})
export default class IndexPage implements OnInit, OnDestroy {
  posts = injectContentFiles<BlogPost>();
  categories: CategoriesMap = [];
  filteredCategories: CategoriesMap = [];
  selectedTopic = Topic.Angular; // 'Algorithms'; // 'Angular';
  sub: Subscription = new Subscription();

  ngOnInit(): void {
    console.log('ngOnInit IndexPage');
    this.sub.add(
      this.store.getSelectedTopic().subscribe((topic) => {
        console.log('getSelectedTopic.subscribe', topic);
        this.selectedTopic = topic; // as Topic;
        this.filterCategories(topic);
      })
    );
    console.log(this.sub);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    console.log('ngOnDestroy IndexPage');
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: AppStateService,
    private cdr: ChangeDetectorRef
  ) {
    this.organizePostsByCategory();
    this.filterCategories(this.selectedTopic);
    console.log('constructor');
  }

  filterCategories(topic: Topic): void {
    this.filteredCategories = [];
    this.categories.forEach((x) => {
      console.log("'" + x.posts[0].attributes.topic + "'" + topic + "'");
      if (x.posts[0].attributes.topic === topic) {
        console.log('push', x);
        this.filteredCategories.push(x);
      }
    });
    console.log('filter', this.filteredCategories);
    this.cdr.markForCheck();
    // this.filteredCategories = this.categories.filter((category) => {
    //   // Check if any post in the category has the specified topic
    //   return category.posts.some((post) => post.attributes.topic === topic);
    // });
  }

  organizePostsByCategory() {
    const categoriesMap = new Map<string, any[]>();

    this.posts.forEach((post) => {
      const category = post.attributes.chapter;

      if (!categoriesMap.has(category)) {
        categoriesMap.set(category, []);
      }

      categoriesMap.get(category)?.push(post);
    });

    categoriesMap.forEach((posts, category) => {
      this.categories.push({ name: category, posts: posts });
    });
  }

  onBlogPostClicked(post: any) {
    // console.log(post);
    this.router.navigate(['/blog/' + post.attributes.slug]);
  }
}

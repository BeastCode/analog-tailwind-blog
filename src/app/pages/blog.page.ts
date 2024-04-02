import { NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AppStateService } from '../services/app.store.service';
import { BlogPost, Topic } from '../models/post';
import { Subscription } from 'rxjs';
import { injectContentFiles } from '@analogjs/content';

type CategoriesMap = { name: string; posts: any[] }[];

@Component({
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex items-center bg-blue-600">
      <div (click)="onNotesClicked()" class="pl-5 p-3 text-3xl font-bold">
        Notes
      </div>
      <div
        *ngFor="let topic of topics"
        (click)="onMenuClicked(topic)"
        class="pl-4 pr-4 pt-1 text-xl w-60 font-bold"
      >
        {{ topic }}
      </div>
    </div>

    <div class="flex flex-row">
      <div class="flex flex-col">
        <div class="flex flex-col" *ngFor="let category of filteredCategories">
          <div class="text-xl font-bold pl-3 pt-4 text-blue-600">
            {{ category.name }}
          </div>
          <ul>
            <li *ngFor="let post of category.posts">
              <div (click)="onBlogPostClicked(post)" class="pl-6">
                {{ post.attributes.title }}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <router-outlet class="m-8" />
    </div>
  `,
})
export default class BlogPageComponent {
  posts = injectContentFiles<BlogPost>();
  categories: CategoriesMap = [];
  filteredCategories: CategoriesMap = [];
  selectedTopic = Topic.Angular; // 'Algorithms'; // 'Angular';
  sub: Subscription = new Subscription();

  topics: string[] = [];
  constructor(
    private router: Router,
    private store: AppStateService,
    private cdr: ChangeDetectorRef
  ) {
    for (const topic in Topic) {
      this.topics.push(topic);
    }

    this.organizePostsByCategory();
    this.filterCategories(this.selectedTopic);
    console.log('constructor');
  }

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

  onMenuClicked(topic: string) {
    this.store.setSelectedTopic(topic as Topic);
    this.router.navigate(['/blog']);
  }

  onNotesClicked() {
    this.router.navigate(['/blog']);
  }

  get Topic() {
    return Topic;
  }

  filterCategories(topic: Topic): void {
    this.filteredCategories = [];
    this.categories.forEach((x) => {
      if (x.posts[0].attributes.topic === topic) {
        this.filteredCategories.push(x);
      }
    });
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

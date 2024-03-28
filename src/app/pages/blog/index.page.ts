import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { injectContentFiles } from '@analogjs/content';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { BlogPost } from 'src/app/models/post';

@Component({
  standalone: true,
  imports: [NgFor, RouterLink, AsyncPipe],
  template: `
    <div *ngFor="let category of categories">
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
export default class IndexPage {
  posts = injectContentFiles<BlogPost>();
  categories: { name: string; posts: any[] }[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.organizePostsByCategory();
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
    console.log(post);
    this.router.navigate(['/blog/' + post.attributes.slug]);
  }
}

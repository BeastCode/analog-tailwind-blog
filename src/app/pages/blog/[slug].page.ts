import { MarkdownComponent, injectContent } from '@analogjs/content';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { BlogPost } from 'src/app/models/post';

@Component({
  standalone: true,
  imports: [MarkdownComponent, NgIf, AsyncPipe],
  template: `
    <div *ngIf="post$ | async as post">
      <div class="text-2xl font-bold pt-6 pb-2 text-blue-600">
        {{ post.attributes.title }}
      </div>

      <analog-markdown [content]="post.content" />
    </div>
  `,
})
export default class BlogPostPage implements OnInit, OnDestroy {
  post$ = injectContent<BlogPost>();

  ngOnInit(): void {
    console.log('ngOnInit BlogPostPage');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy BlogPostPage');
  }
}

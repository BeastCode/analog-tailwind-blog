import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AppStateService } from '../services/app.store.service';
import { Topic } from '../models/post';

@Component({
  standalone: true,
  imports: [RouterOutlet, NgIf],
  // providers: [AppStateService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="bg-blue-800">
      <div class="p-3 text-3xl font-bold">
        <!-- Data Structures & Algorithms Notes -->
        Notes
      </div>
      <div (click)="onMenuClicked(Topic.Angular)">Angular</div>
      <div (click)="onMenuClicked(Topic.AI)">AI</div>
      <div (click)="onMenuClicked(Topic.Algorithms)">Algorithms</div>
    </nav>
    <ng-container>
      <button (click)="onIndexClicked()">Index</button>
      <div (click)="onMenuClicked(Topic.Angular)">Angular</div>
      <div (click)="onMenuClicked(Topic.AI)">AI</div>
      <div (click)="onMenuClicked(Topic.Algorithms)">Algorithms</div>
      <!-- <button (click)="onPrevClicked()">Prev</button>
      <button (click)="onNextClicked()">Next</button> -->
    </ng-container>
    <div class="router">
      <router-outlet />
    </div>
  `,
  styles: [
    `
      .router {
        margin: 2rem;
      }
    `,
  ],
})
export default class BlogPageComponent implements OnInit, OnDestroy {
  isBlogRoute = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: AppStateService
  ) {}

  ngOnInit() {
    console.log('ngOnInit blogpage');

    this.router.events.subscribe((event: any) => {
      this.isBlogRoute = event.url !== '/blog';
    });
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy blogpage');
  }

  onMenuClicked(topic: Topic) {
    console.log('onMenuClicked', topic);
    this.store.setSelectedTopic(topic);
  }

  onIndexClicked() {
    this.router.navigate(['/blog']);
  }

  // onPrevClicked() {
  //   this.router.navigate(['/blog']);
  // }

  // onNextClicked() {
  //   this.router.navigate(['/blog']);
  // }
  get Topic() {
    return Topic;
  }
}

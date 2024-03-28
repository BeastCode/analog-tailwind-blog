import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, NgIf],
  template: `
    <nav class="bg-blue-800">
      <div class="p-3 text-3xl font-bold">
        Data Structures & Algorithms Notes
      </div>
    </nav>
    <ng-container *ngIf="isBlogRoute">
      <button (click)="onIndexClicked()">Index</button>
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
export default class BlogPageComponent implements OnInit {
  isBlogRoute = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      this.isBlogRoute = event.url !== '/blog';
    });
  }

  onIndexClicked() {
    this.router.navigate(['/blog']);
  }

  onPrevClicked() {
    this.router.navigate(['/blog']);
  }

  onNextClicked() {
    this.router.navigate(['/blog']);
  }
}

import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AppStateService } from '../services/app.store.service';
import { Topic } from '../models/post';

@Component({
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex flex-wrap justify-around items-center bg-blue-600">
      <div (click)="onNotesClicked()" class="p-3 text-3xl font-bold">Notes</div>
      <div *ngFor="let topic of topics" (click)="onMenuClicked(topic)">
        {{ topic }}
      </div>
    </div>

    <router-outlet class="m-8" />
  `,
})
export default class BlogPageComponent {
  topics: string[] = [];
  constructor(private router: Router, private store: AppStateService) {
    for (const topic in Topic) {
      this.topics.push(topic);
    }
  }

  onMenuClicked(topic: string) {
    this.store.setSelectedTopic(topic as Topic);
  }

  onNotesClicked() {
    this.router.navigate(['/blog']);
  }

  get Topic() {
    return Topic;
  }
}

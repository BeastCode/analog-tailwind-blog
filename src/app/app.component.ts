import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppStateService } from './services/app.store.service';
import { Subscription } from 'rxjs';
import { Topic } from './models/post';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // providers: [AppStateService],
  template: ` <router-outlet></router-outlet> `,
  styles: [
    `
      :host {
        max-width: 1280px;
      }
    `,
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  sub: Subscription = new Subscription();

  constructor(private store: AppStateService) {}

  ngOnInit() {
    console.log('ngOnInit App');
    this.sub.add(
      this.store.getSelectedTopic().subscribe((topic) => {
        console.log('App getSelectedTopic.subscribe', topic);
      })
    );
    this.store.setSelectedTopic(Topic.AI);
  }

  ngOnDestroy() {
    console.log('ngOnInit App');
  }
}

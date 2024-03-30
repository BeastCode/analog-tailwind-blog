import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Topic } from '../models/post';
import angular from '@analogjs/vite-plugin-angular';

@Injectable({
  providedIn: 'root',
})
export class AppStateService implements OnInit, OnDestroy {
  private selectedTopicSubject: BehaviorSubject<Topic> =
    new BehaviorSubject<Topic>(Topic.Angular);

  constructor() {
    this.setSelectedTopic(Topic.Angular);
  }

  setSelectedTopic(topic: Topic): void {
    this.selectedTopicSubject.next(topic);
  }

  getSelectedTopic(): Observable<Topic> {
    return this.selectedTopicSubject.asObservable();
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy service');
  }

  ngOnInit(): void {
    console.log('ngOnInit service');
  }
}

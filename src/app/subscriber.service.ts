import { Injectable } from '@angular/core';
import { Subscribers } from './subscribers';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {
  subscribers: Subscribers[] = [
    { name: 'Haris', phone: 9045997787 },
    { name: 'Manjul', phone: 9988998899 }
  ];

  constructor() {
  }

  save(subscriber: Subscribers) {
    this.subscribers.push(subscriber);
  }


  delete(index: number) {
    this.subscribers.splice(index, 1);
  }

  getSubscriber(): Observable<Subscribers[]> {
    return of(this.subscribers);
  }
}

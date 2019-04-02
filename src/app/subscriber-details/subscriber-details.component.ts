import { SubscriberService } from './../subscriber.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscribers } from '../subscribers';

@Component({
  selector: 'app-subscriber-details',
  templateUrl: './subscriber-details.component.html',
  styleUrls: ['./subscriber-details.component.css']
})
export class SubscriberDetailsComponent implements OnInit {

  subscribers$: Observable<Subscribers[]>;
  
  constructor(private subscriberService: SubscriberService) { }

  ngOnInit() {
    this.subscribers$ = this.subscriberService.getSubscriber();
  }

  delete(index: number) {
    this.subscriberService.delete(index);
  }

}

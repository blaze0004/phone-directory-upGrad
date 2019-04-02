import { SubscriberService } from './../subscriber.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-subscriber',
  templateUrl: './add-subscriber.component.html',
  styleUrls: ['./add-subscriber.component.css']
})
export class AddSubscriberComponent implements OnInit {

  constructor(private subscriberService: SubscriberService, private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }
  save(subscriber) {
    this.subscriberService.save(subscriber);
    console.log('saved');
    this.goBack();
  }

}

import { SubscriberDetailsComponent } from './subscriber-details/subscriber-details.component';
import { AddSubscriberComponent } from './add-subscriber/add-subscriber.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: SubscriberDetailsComponent },
  { path: 'add', component: AddSubscriberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

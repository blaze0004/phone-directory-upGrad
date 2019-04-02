import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddSubscriberComponent } from './add-subscriber/add-subscriber.component';
import { SubscriberDetailsComponent } from './subscriber-details/subscriber-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSubscriberComponent,
    SubscriberDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

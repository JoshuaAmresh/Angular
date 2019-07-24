import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { ActordataService } from './services/actordata.service';
import { ObservableService } from './services/observable.service';
import { BlogService } from './services/blog.service';
import { WeatherService } from './services/weather.service';

import { AppComponent } from './app.component';
import { ActorlistComponent } from './components/actorlist/actorlist.component';
import { MessageComponent } from './components/message/message.component';
import { ObservabledemoComponent } from './components/observabledemo/observabledemo.component';
import { WeatherdemoComponent } from './components/weatherdemo/weatherdemo.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';
import { PiglatinPipe } from './pipes/piglatin.pipe';





@NgModule({
  declarations: [
    AppComponent,
    ActorlistComponent,
    MessageComponent,
    ObservabledemoComponent,
    WeatherdemoComponent,
    ParentComponent,
    ChildComponent,
    PipedemoComponent,
    PiglatinPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ActordataService, ObservableService, BlogService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

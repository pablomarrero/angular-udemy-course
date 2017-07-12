import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import {CoursesService} from './courses.service'
import {AuthorsService} from './authors.service'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CoursesComponent, AuthorsComponent ],
  providers: [CoursesService, AuthorsService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

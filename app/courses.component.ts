import {Component} from '@angular/core'
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{ title }}
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `
})
export class CoursesComponent{
    title = "The title of courses pages";
    courses;

    constructor(courseService: CoursesService){
        this.courses = courseService.getCourses();
    }
}
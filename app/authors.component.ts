import {Component} from '@angular/core'
import { AuthorsService } from "./authors.service";

@Component({
    selector: 'authors',
    template: `
        <h2>Authors</h2>
        {{ name }}
        <ul>
            <li *ngFor="let author of authors">
                {{ author }}
            </li>
        </ul>
    `
})
export class AuthorsComponent{
    name = "The name of autors pages";
    authors;

    constructor(authorService: AuthorsService){
        this.authors = authorService.getAuthors();
    }
}
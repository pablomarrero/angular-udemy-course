import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {
    getAuthors() : string[]{
        return ["Author1","Author2","Author3"];
    }
}
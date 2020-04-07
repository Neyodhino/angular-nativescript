import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor (private http: HttpClient) { }

    register(user: User): Observable<any> {
        console.log(user);
        return (
            this.http.post('https://blackpod.herokuapp.com/register', user)
            )
    }
}

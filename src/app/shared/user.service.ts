import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user.model";
import { Observable } from "rxjs";
import * as appSettings from 'tns-core-modules/application-settings'

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

    queryLocalStorage() {
        return(
            appSettings.getString('user')
        );
    }

    saveData(key: string, value: any){
        appSettings.setString(key, value);
    }
}

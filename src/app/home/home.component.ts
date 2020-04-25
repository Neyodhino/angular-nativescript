import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from "@angular/core";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";

import { User } from "../shared/user.model";
import { UserService } from "../shared/user.service";

@Component({
    selector: "app-login",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
    isLoggingIn = true;
    user: User;
    processing = false;
    @ViewChild("password", {static: false}) password: ElementRef;
    @ViewChild("confirmPassword", {static: false}) confirmPassword: ElementRef;

    constructor(private page: Page, private routerExtensions: RouterExtensions, private userService: UserService) {
        this.page.actionBarHidden = true;
        this.user = new User();
        this.user.name = "" ;
        this.user.age = null;
        this.user.residence = ""
        this.user.phoneNumber = "";
        this.user.farmingLocation = "";
    }

    ngOnInit(): void {
        this.page.cssClasses.add("welcome-page-background");
    }

    ngAfterViewInit(): void {
        this.page.cssClasses.add("welcome-page-background");
    }


    submit() {
        if (
            !this.user.name || !this.user.age || !this.user.residence ||
            !this.user.phoneNumber || !this.user.farmingLocation
            ) {
            this.alert(false, "Please fill all fields as all fields are required");
            return;
        }

        this.processing = true;
        this.register();
    }

    register() {
        this.userService.register(this.user)
            .subscribe((response) => {
                this.processing = false;
                this.alert(true, 'Your account was successfully created. Notifications will be sent to you periodically to give you update on black-pox disease and some preventive measures you can take. The app will be closed immediately you click on OK button. Thanks');
                this.userService.saveData('User', 'Registered');
                this.clearInputFields();
            },(error) => {
                console.error(error)
                this.processing = false;
                this.alert(false, "Sorry, we were unable to create your account, this may be due to network connectivity. Please Re-try.");
            });
    }

    clearInputFields(){
        this.user.name = "" ;
        this.user.age = null;
        this.user.farmingLocation = "";
        this.user.residence = ""
        this.user.phoneNumber = null;
    }

    alert(closeApp: boolean, message: string) {
        if(!closeApp){
            return alert({
                title: "BLACK-POD DISEASE",
                okButtonText: "OK",
                message: message
            })
        }
        return alert({
            title: "BLACK-POD DISEASE",
            okButtonText: "OK",
            message: message
        }).then(()=> {
            this.routerExtensions.navigate(['/welcome'])
        });
    }
}


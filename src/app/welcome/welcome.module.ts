import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { WelcomeRoutingModule } from "./welcome-routing.module";

import { WelcomeComponent } from "./welcome.component";

import { WelcomeSlidesService } from "./welcome-slides.service";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        WelcomeRoutingModule,
    ],
    providers: [
        WelcomeSlidesService
    ],
    declarations: [
        WelcomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class WelcomeModule { }

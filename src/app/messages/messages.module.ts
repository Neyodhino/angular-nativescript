import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./messages-routing.module";
import { MessagesComponent } from "./messages.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
    ],
    declarations: [
        MessagesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MessagesModule { }

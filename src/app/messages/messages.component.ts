import { Component, OnInit } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { CardView } from "@nstudio/nativescript-cardview";

registerElement("CardView", () => CardView);

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./messages.component.html",
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
    data = [];

    constructor() {
    }

    ngOnInit(): void {
        this.data.push({ heading: "April, 2020", content: "There could be an outbreak between June/July, during this period you might see symptomps like Black or Brown colour on the cocoa pod.  So you are advice to apply fungicide between April and July so as to keep your farm safe. You can apply fungicide like Metalaxyl (Ridomil) and Ciprous oxide (perenox). The application of the fungicide should be done 6-8 times in every 3-4weeks" });
    }
}

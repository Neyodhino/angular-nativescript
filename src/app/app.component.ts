import { Component } from "@angular/core";
import * as firebase from 'nativescript-plugin-firebase';
import { Message, messaging } from "nativescript-plugin-firebase";

import { UserService } from './shared/user.service';
import { Inotification } from "./shared/notification.model";
import * as appSettings from 'tns-core-modules/application-settings';
import { alert } from "tns-core-modules/ui/dialogs";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {

    constructor(
        private userService: UserService
    ) {

    }

    ngOnInit(): void {

        firebase.init({
         showNotifications: true,
          showNotificationsWhenInForeground: true,

          onPushTokenReceivedCallback: (token) => {
            console.log('[Firebase] onPushTokenReceivedCallback:', { token });
          },

          onMessageReceivedCallback: (message: firebase.Message) => {
            console.log('[Firebase] onMessageReceivedCallback:', {message} );
        }
        })
          .then(() => {
            console.log('[Firebase] Initialized');
          })
          .catch(error => {
            console.log('[Firebase] Initialize', { error });
          });

      }

    //   addNotificationToStorage(notification: Inotification) {
        // const previousNotification = this.userService.queryLocalStorage();
        // if(previousNotification == undefined) {
        //     let allNotification = []
        //     allNotification.push(notification);
        //     appSettings.setString('Notifications', JSON.stringify(allNotification));
        // } else {
        //     let storedNotification = JSON.parse(previousNotification);
        //     let notificationToBeStored= JSON.stringify(storedNotification.push(notification));
        //     appSettings.setString('Notifications', notificationToBeStored);
        // }
    //     const itemStored = appSettings.getString("Notifications");
    //     const itemSelected = {
    //         "title": notification.title,
    //         "body": notification.body,
    //         "Date": 'April'
    //     };
    //     if (itemStored == undefined) {
    //         let dataStored = [];
    //         dataStored.push(itemSelected);
    //         let stringifyData = JSON.stringify(dataStored);
    //         appSettings.setString("Notifications", stringifyData);
    //     } else {
    //         let serialisedData = JSON.parse(itemStored);
    //         serialisedData.push(itemSelected);
    //         let sd = JSON.stringify(serialisedData);
    //         appSettings.setString("Notifications", sd);
    //     }
    // }
 }

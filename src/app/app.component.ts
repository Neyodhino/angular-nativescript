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
            console.log('[Firebase] onMessageReceivedCallback:', { message });
            appSettings.setString('notification', message.body);
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
    //     const previousNotification = this.userService.queryLocalStorage();
    //     if(previousNotification == undefined) {
    //         let allNotification = []
    //         JSON.stringify(allNotification.push(notification));
    //         this.userService.storeNotification('Notification', allNotification);
    //     }else {
    //         let storedNotification = JSON.parse(previousNotification);
    //         let notificationToBeStored= JSON.stringify(storedNotification.push(notification));
    //         appSettings.setString('Notification', notificationToBeStored);
    //     }
    // }
 }

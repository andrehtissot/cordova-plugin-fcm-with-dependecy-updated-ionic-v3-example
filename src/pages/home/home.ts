import { Component } from "@angular/core";
import { FCM } from "cordova-plugin-fcm-with-dependecy-updated/ionic/v4";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  constructor(private fcm: FCM) {
    this.fcm.onNotification().subscribe((data) => {
      console.log(data);
      alert(JSON.stringify(data));
    });
  }

  public alertToken() {
    this.fcm.getToken().then((token: string) => {
      console.log(token);
      alert(JSON.stringify(token));
    });
  }
}

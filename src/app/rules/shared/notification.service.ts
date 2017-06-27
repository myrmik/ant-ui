import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Notification} from "./notification";

@Injectable()
export class NotificationService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private notificationUrl = 'http://localhost:8080/rule';

  constructor(private http: Http) { }

  getNotifications(ruleId): Promise<Notification[]> {
    return this.http.get(this.notificationUrl + '/' + ruleId + '/notifications')
      .toPromise()
      .then(response => response.json() as Notification[])
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Rule} from "./rule";
import 'rxjs/add/operator/toPromise';

export const RULES: Rule[] = [
  { id: "11", userId:'1', sourceId: 'nyaa', name: 'Little Witch Academia', pubDate: new Date(), filters: [{regex: '.*Little Witch Academia.*'}] },
  { id: "12", userId:'1', sourceId: 'nyaa', name: 'Space Sentai', pubDate: new Date(), filters: [{regex: '.*Space Sentai.*'}] },
];

@Injectable()
export class RuleService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private rulesUrl = 'http://localhost:8080/user/rules';

  constructor(private http: Http) { }

  getRules(): Promise<Rule[]> {
    return this.http.get(this.rulesUrl)
      .toPromise()
      .then(response => response.json() as Rule[])
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import 'rsjx/Rx';
/*
  Generated class for the RedditProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RedditProvider {
  baseUrl:string;
  constructor(public http: HttpClient) {
    console.log('Hello RedditProvider Provider');
    this.baseUrl="https://www.reddit.com/r";
  }
  getPosts(category,limit){
  	return this.http.get(this.baseUrl+'/'+category+'/top.json?limit='+limit);
  	// .map(res=>res.json());
  }

}

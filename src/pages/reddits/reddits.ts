import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { RedditProvider } from '../../providers/reddit/reddit';

/**
 * Generated class for the RedditsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reddits',
  templateUrl: 'reddits.html',
})
export class RedditsPage {
  items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private redditService:RedditProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedditsPage');
  }


  ngOnInit(){
  	this.getPosts('sports',5);
  }
  getPosts(category,limit){
  	this.redditService.getPosts(category,limit).subscribe(response=>{
  		console.log(response)
  		return this.items=response.data.children;
  	})
  }
  viewItem(item){
  	this.navCtrl.push(DetailsPage ,item);
  }
}

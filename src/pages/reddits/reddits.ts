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
  items:Object;
  category:any;
  limit:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private redditService:RedditProvider) {
    this.getDefaults();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad RedditsPage');
  }


  ngOnInit(){
    this.getPosts(this.category,this.limit);
  }

  getPosts(category,limit){
  	this.redditService.getPosts(category,limit).subscribe(response=>{
  		// console.log(response)
  		return this.items=response.data.children;
  	})
  }

  viewItem(item){
  	this.navCtrl.push(DetailsPage ,{item:item});
  }

  getDefaults(){
    if (localStorage.getItem('category')!=null){
      this.category=localStorage.getItem('category');
    }else{
      this.category='entertainment';
    }
    if (localStorage.getItem('limit')!=null || localStorage.getItem('limit')!=undefined){
      this.limit=parseInt(localStorage.getItem('limit'));
    }else{
      this.limit=5;
    }  
  }

  changeCategory(){
    this.getPosts(this.category,this.limit);
  }
}

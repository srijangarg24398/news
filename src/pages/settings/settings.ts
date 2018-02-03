import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RedditsPage } from '../reddits/reddits';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  category:string;
  limit:number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.getDefaults();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SettingsPage');
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

  setDefaults(){
  	localStorage.setItem("category",this.category);
  	localStorage.setItem("limit",this.limit.toString());
  	this.navCtrl.push(RedditsPage);
  }

}

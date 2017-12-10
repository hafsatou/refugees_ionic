import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform, ViewController} from 'ionic-angular';
import {Http} from "@angular/http";
import {HomePage} from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username:string;
  password:string;
  constructor(public nav: NavController, public viewCtrl:ViewController,public platform: Platform, public http: Http) {
  }

  login() {

        //Navigate to home page
        //this.nav.setRoot(HomePage);
        this.nav.parent.select(2);
  }



}
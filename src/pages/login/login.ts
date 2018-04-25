import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  NICdiv:any;


  NIC:string;
  AccountType:string;
  FirstName:string;
  LastName:string;
  DOB:string;
  ContactNumber:string;
  Address:string;
  Occupation:string;
  Balance:Int32Array;
  CreatedAt:string;
  UpdatedAt:string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
   
  
    // this.NICdiv=this.navParams.get('NIC');
    // console.log(this.navParams.get('NIC'));
    // console.log(this.navParams.get('AccountType'));
    
    console.log(this.navParams.get('ContactNumber'));

    this.NIC=this.navParams.get('NIC');
    this.AccountType=this.navParams.get('AccountType');
    this.FirstName=this.navParams.get('FirstName');
    this.LastName=this.navParams.get('LastName');
    this.DOB=this.navParams.get('DOB');
    this.ContactNumber=this.navParams.get('ContactNumber');
    this.Address=this.navParams.get('Address');
    this.Occupation=this.navParams.get('Occupation');
    this.Balance=this.navParams.get('Balance');
    this.CreatedAt=this.navParams.get('CreatedAt');
    this.UpdatedAt=this.navParams.get('UpdatedAt');
    
  }


}

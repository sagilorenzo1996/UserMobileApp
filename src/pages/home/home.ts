import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { LoginPage } from '../login/login';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
netResponse:any;


  constructor(public navCtrl: NavController,public http: Http) {

  }



 callPostService(username,password){


  var data={};
  data["username"]=username;
  data["password"]=password;
  console.log(data);

  // let urlSearchParams = new URLSearchParams();
  //   urlSearchParams.append('Username', username);
  //   urlSearchParams.append('Password', password);
  //   let body = urlSearchParams.toString()
  //   return this.http
  //       .post('http://localhost:8080/login/user', body, { headers: headerss })
  //       .map(response => response.json())
  //       .toPromise();
  // Http({
  //   method: 'POST',
  //   url: 'http://localhost:8080/login/user',
  //   data:JSON.stringify(data)
  // }).then(function successCallback(response) {s
  //     console.log(response);
  //   }, function errorCallback(response) {
  //     // called asynchronously if an error occurs
  //     // or server returns response with an error status.
  //   });

  let path = 'http://192.168.8.10:8080/login/user';
        

    
        // this.http.post(encodedPath,JSON.stringify(data),{headers: {'Content-Type':'application/json'}})
        //     .map(res => res.json()).subscribe(data => {
        //         let responseData = data;
        //         console.log(responseData);
        //     },
        //     err => {
        //         console.log('error in ETPhoneHome');
        //     });
        // 

let headers = new Headers(
{
  'Content-Type' : 'application/json'
});
let options = new RequestOptions({ headers: headers });


  this.http.post(path,JSON.stringify(data) , options)
  .toPromise()
  .then((response) =>
  {
    console.log('API Response : ', response.json());
    if(response){
    
      // this.netResponse=JSON.stringify(response.json().id);
      // this.hideMe = true;

    this.navCtrl.push(LoginPage,{
    NIC:response.json().nic,
    AccountType:response.json().accountType,
    FirstName:response.json().firstName,
    LastName:response.json().lastName,
    DOB:response.json().dateOfBirth,
    ContactNumber:response.json().contactNumber,
    Address:response.json().address,
    Occupation:response.json().occupation,
    Balance:response.json().balance,
    CreatedAt:response.json().createdAt,
    UpdatedAt:response.json().updatedAt
});
    }
  })
  .catch((error) =>
  {
    console.error('API Error : ', error.status);
    console.error('API Error : ', JSON.stringify(error));
  });

}
}

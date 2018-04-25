// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the NetworkEngineProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NetworkEngineProvider {

  constructor(public http: Http) {
    console.log('Hello NetworkEngineProvider Provider');
  }

  callGet(username,password):Promise<any>{

    console.log("Username="+username+"Password="+password);
    let url="http://test.com/get?us="+username+"&ps="+password;
    
    let request = this.http.get(url);
    
    return request.toPromise();
  }
  callPost(username,password){

    console.log("Username="+username+"Password="+password);
    
  }
}

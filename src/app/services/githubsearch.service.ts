import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class GithubsearchService {

  private username = 'waltzfordebby';
  private client_id = 'ea7a1fbcb2c55527fd71';
  private client_secret ='d2763f3a69922492fe60ea6d5739192d804b85d3';

  constructor(public http:Http) {
  	 
   }

 getUsers(){
     return this.http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id +'&client_secret='+this.client_secret).pipe(map(res=>res.json()));
 }

  getRepos(){
     return this.http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id +'&client_secret='+this.client_secret).pipe(map(res=>res.json()));
  }

  updateUsername(username:any){
     this.username = username;
  }

}


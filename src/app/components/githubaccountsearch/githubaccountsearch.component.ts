import { Component, OnInit } from '@angular/core';
import { GithubsearchService } from '../../services/githubsearch.service';

@Component({
  selector: 'app-githubaccountsearch',
  templateUrl: './githubaccountsearch.component.html',
  styleUrls: ['./githubaccountsearch.component.css']
})

export class GithubaccountsearchComponent implements OnInit {
	user:any;
	repos:any;
	username: any;

  constructor(private dataService:GithubsearchService) { 
  }

  ngOnInit() {
  	 this.user = false;
  }

  search(){
  	 this.dataService.updateUsername(this.username);

  	 this.dataService.getUsers().subscribe(user=>{
  	 	this.user = user;
  	 	console.log(user);
  	 })

  	 this.dataService.getRepos().subscribe(repos=>{
  	 	this.repos = repos;
  	 	console.log(repos);
  	 })
  }

}

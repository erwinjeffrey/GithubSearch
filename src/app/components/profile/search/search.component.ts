import { GithubService } from './../../../services/github.service';
import { Component } from '@angular/core';

@Component({
    selector: 'search',
    templateUrl: './search.component'
})
export class SearchComponent{
 
    username: string;

    constructor(private githubService: GithubService){

    }

    searchUser(){
        this.githubService.updateUser(this.username);

        /*this.githubService.getUser()
        .subscribe(
            user =>{
              this.user = user;
            }
        );

    this.githubService.getRepos()
        .subscribe(
            repos =>{
               this.repos = repos;
            }
        );*/
    }
}
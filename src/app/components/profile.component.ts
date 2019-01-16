import { User } from './../models/user.model';
import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';
import { Repos } from '../models/repos.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent{

    user: User[] ;
    repos: Observable<Repos[]>;
    username: string;

    constructor(private githubService: GithubService){
        this.user = null;
     }

 
    searchUser(){
        this.githubService.updateUser(this.username);

        this.githubService.getUser()
        .subscribe(
            user =>{
              this.user = user;
            }
        );

        this.repos = this.githubService.getRepos();
        /*.subscribe(
            repos =>{
                this.repos = repos;
            }
        );*/
    }
    
}
import { User } from './../../models/user.model';

import { Component } from '@angular/core';
import { Repos } from 'src/app/models/repos.model';


@Component({
    selector: 'profile',
    templateUrl: './profile.component.html'
})
export class ProfileComponent{

    user: User[] ;
    repos:Repos[];

     getUsers(users: User[]){
       this.user = users;
     }
   
     getRepos(repos: Repos[]){
       this.repos = repos;
     }
    
}
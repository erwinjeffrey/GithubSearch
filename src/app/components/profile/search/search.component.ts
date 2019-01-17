import { User } from './../../../models/user.model';
import { GithubService } from './../../../services/github.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { Repos } from 'src/app/models/repos.model';

@Component({
    selector: 'search',
    templateUrl: './search.component.html'
})
export class SearchComponent{
 
    @Output() userReturned = new EventEmitter<User[]>();
    @Output() reposRetured = new EventEmitter<Repos[]>();

    username: string;

    constructor(private githubService: GithubService){}

    searchUser(){
        this.githubService.updateUser(this.username);

        this.githubService.getUser()
        .subscribe(
            user =>{
               this.userReturned.emit(user);
            }
        );

    this.githubService.getRepos()
        .subscribe(
            repos =>{
               this.reposRetured.emit(repos);
            }
        );
    }
}
import { User } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Repos } from '../models/repos.model';
import { Subject } from 'rxjs';

@Injectable()
export class GithubService{
    private username: string;
    private client_id = 'dcad4aacffef1991c289';
    private client_secret ='16eadd3502e4a86c1894fa56474396173309691d';

    userSubject = new Subject<User[]>();

    constructor(private httpClient: HttpClient){
        console.log('Github Service Ready...');
        this.username = 'erwinjeffrey';
    }

    getUser(){
        return this.httpClient.get<User[]>("http://api.github.com/users/"
        +this.username+'?client_id='
        +this.client_id+'&client_secret='
        +this.client_secret);
    }

    getRepos(){
        return this.httpClient.get(`http://api.github.com/users/${this.username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        .pipe(
            map(
                (response: Repos[]) =>{
                    return response;
                }
            )
        );
    }

    updateUser(username: string){
        this.username = username;
    }
}
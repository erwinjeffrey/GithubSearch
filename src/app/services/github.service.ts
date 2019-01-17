import { User } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, debounceTime } from 'rxjs/operators';
import { Repos } from '../models/repos.model';
import { Subject } from 'rxjs';


@Injectable()
export class GithubService{
    private username: string;
    private client_id: string = 'dcad4aacffef1991c289';
    private client_secret: string ='16eadd3502e4a86c1894fa56474396173309691d';

    userSubject = new Subject<User[]>();

    constructor(
        private httpClient: HttpClient){
        console.log('Github Service Ready...');
        this.username = 'erwinjeffrey';
    }

    // getUser(){
    //     let userRequestModel:UserRequestModel = {
    //         username:'roliver',
    //         client_id: 1,
    //         client_secret:'asdasdad1123135t'
    //     };
 
    //     this.invokeProvider.call<UserRequestModel,UserResponseModel>('http://api.github.com/users/',userRequestModel,HttpMethodType.GET);

    // }

    getUser(){
        return this.httpClient.get<User[]>("http://api.github.com/users/"
        +this.username);
    }

    getRepos(){
        return this.httpClient.get(`http://api.github.com/users/${this.username}/repos`)
        .pipe(
            map(
                (response: Repos[]) =>{
                    return response;
                }
            ),
            debounceTime(50000)
        );
    }

    updateUser(username: string){
        this.username = username;
    }

    getClientId = function() {
        return this.client_id;
    }

    getClientSecret = function(){
        return this.client_secret;
    }
    
}
import { InvokeEntity } from '../entities/InvokeEntity';
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { Repos } from '../models/repos.model';
import { HttpMethodType } from '../enums/HttpMethodType';

interface RequestParamModel{
    client_id: string,
    client_secret: string
}

@Injectable()
export class GithubService{
    private username: string;
    private client_id: string = 'dcad4aacffef1991c289';
    private client_secret: string ='16eadd3502e4a86c1894fa56474396173309691d';

    constructor(
        private invokeProvider: InvokeEntity){
        console.log('Github Service Ready...');
    }

    userRequestModel: RequestParamModel = {
        client_id: this.client_id,
        client_secret:this.client_secret
    };

    getUser(){
       return  this.invokeProvider
            .call<RequestParamModel,User[]>(`http://api.github.com/users/${this.username}`,this.userRequestModel,HttpMethodType.GET);
    }

    getRepos(){
      return this.invokeProvider
            .call<RequestParamModel, Repos[]>(`http://api.github.com/users/${this.username}/repos`,this.userRequestModel, HttpMethodType.GET);
    }

    updateUser(username: string){
        this.username = username;
    }
    
}
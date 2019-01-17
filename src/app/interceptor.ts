import { GithubService } from './services/github.service';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class GithHubInterceptor implements HttpInterceptor {

    
    constructor(private githubService: GithubService){}

  intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    const params  = req.params
    .set('client_id',this.githubService.getClientId())
    .set('client_secret', this.githubService.getClientSecret());
    
    console.log(`Intercepted Re ${req.url}`);
    const copieReq = req.clone({params});

    return next.handle(copieReq);
  }
}

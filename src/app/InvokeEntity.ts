import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable } from "rxjs/";
import { HttpMethodType } from './enums/HttpMethodType';

@Injectable()
export class InvokeEntity{
    private body: any;
    private path : string;
    private _headers = new HttpHeaders({ 'Content-Type': 'application/json' });  
    private hasToken : boolean = true;

    public constructor(private http: HttpClient) {
    }

    call<TRequest,TResponse>(path:string, body: TRequest, methodType: HttpMethodType, hasToken?:boolean) : Observable<TResponse>{
      this.body = body;
      this.path = path;

      switch(methodType){
          case HttpMethodType.POST: return this.invokePost<TResponse>(); 
          case HttpMethodType.GET:  return this.invokeGet<TResponse>();
          case HttpMethodType.DELETE: return this.invokeDelete<TResponse>();
          case HttpMethodType.PUT: return this.invokePut<TResponse>(); 
      }
    }

    invokePut<TResult>(){
      this.path = this.generateGetDataURL(this.path,this.body);
      return this.http.put(this.path, this.generateOptions())
      .pipe<TResult>(catchError(this.handlerError));
    }

    invokeDelete<TResult>(){
      this.path = this.generateGetDataURL(this.path,this.body);
      return this.http.delete(this.path, this.generateOptions())
      .pipe<TResult>(catchError(this.handlerError));
    }

    invokeGet<TResult>(){
      this.path = this.generateGetDataURL(this.path,this.body);
      return this.http.get(this.path, this.generateOptions())
      .pipe<TResult>(catchError(this.handlerError));
    }

    invokePost<TResult>(){
      return  this.http.post(this.path, this.body, this.generateOptions())
      .pipe<TResult>(catchError(this.handlerError));
    }

    private handlerError(error: HttpErrorResponse): Promise<any> {
      if (error.error instanceof ErrorEvent) {
          console.error('Ha ocurrido un error:', error.error.message);
      } else {
          console.error(
              `Backend returned code ${error.status}, ` +
              `body was: ${error.error}`);
      }
      return Promise.reject(error);
  }

  private generateOptions(): {} {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append(
      'Access-Control-Allow-Headers',
      'Origin, Content-Type'
    );
    if(this.hasToken)
      headers.append('Authorization', localStorage.getItem('token'));
    
    return { headers: headers };
  }

   generateGetDataURL = (url: string, data: Object) => {
    const keys = Object.keys(data);
    const items = keys.map(key => `${ encodeURIComponent(key) }=${ encodeURIComponent(data[key]) }`);
    const formData = items.join('&');
    const formAtData = formData.replace('%40', '@');
  
    return `${ url }?${ formAtData }`;
  }
    


}


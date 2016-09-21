import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private userUrl = 'http://localhost:8080/flblog/user';  // URL to web api
    private currentUser:any;
    constructor(private http: Http) { }

    getUsers(page:number,size:number): Promise<any>  {
        if(page<0||size<0){
            page=0,size=10;
        }
        let url=this.userUrl+"?page="+page+"&size="+size;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getUser(id:number):Promise<any>{
        let url=this.userUrl+"?id="+id;
        return this.http.get(url).
            toPromise().
            then(response=>response.json()).
            catch(this.handleError);
    }

    getCurrentUser():any{
        return this.currentUser;
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}



/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
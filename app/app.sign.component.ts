import { Component } from '@angular/core';
import {UserService} from './app.user.service';
@Component({
    selector:"user-sign",
    templateUrl:'app/usersign.html'
})
export class SignComponent{
    private login:boolean=false;
    private name:string="SignIn";
    private currentUser:any=undefined;
    constructor(private userService:UserService){
        this.currentUser=userService.getCurrentUser();
        if(this.currentUser==undefined){
            this.login=false;
        }
    }
}
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import {enableProdMode}  from '@angular/core';
import { AppComponent }  from './app.component';
import {SignComponent}   from './app.sign.component';
import {ItemList}        from './app.articleList.component';
import {ArticleService}  from './app.article.service';
import {UserService}     from './app.user.service';
import {LogComponent} from './app.logpage.component';
import {ArticleComponent} from './app.articleComponent.component';
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule,HttpModule,routing ],
  declarations: [ AppComponent,ItemList,SignComponent,LogComponent,ArticleComponent],
  bootstrap:    [ AppComponent],
  providers:    [ArticleService,UserService]
})

export class AppModule { }

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
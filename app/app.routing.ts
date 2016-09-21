import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogComponent}           from './app.logpage.component';
import {ItemList}               from './app.articleList.component';
import {ArticleComponent}       from './app.articleComponent.component';
const appRoutes: Routes = [
    {
        path:'',
        component:ItemList
    },
    {
        path: 'signin',
        component: LogComponent
    },
    {
        path:'article/:id',
        component:ArticleComponent
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
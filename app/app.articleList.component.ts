import { Component }    from '@angular/core';
import { Injectable }   from '@angular/core';
import {ArticleService} from './app.article.service';
import { Router }       from '@angular/router';
@Component({
    selector: 'item-list',
    templateUrl:'app/articlelist.html'
})
export class ItemList {
    private totalPages:number;
    private totalElements:number;
    private numberOfElements:number;
    private articleList:any;
    private currentPage:number;
    private firstPage:boolean;
    private lastPage:boolean;
    private selectedId:number;
    constructor(private articleService: ArticleService,
                            private router:Router)
    {
        articleService.getArticles(0,10).then((data)=>{
            this.articleList=data.content;
            this.totalElements=data.totalElements;
            this.totalPages=data.totalPages;
            this.numberOfElements=data.numberOfElements;
            this.currentPage=data.number+1;
            this.firstPage=data.firstPage;
            this.lastPage=data.lastPage;

        });
    }
    changePage(page:number){
        this.articleService.getArticles(page,1).then((data)=>{
            this.articleList=data.content;
            this.totalElements=data.totalElements;
            this.totalPages=data.totalPages;
            this.numberOfElements=data.numberOfElements;
            this.currentPage=data.number+1;
            this.firstPage=data.firstPage;
            this.lastPage=data.lastPage;

        });
    }
    onSelect(id:number){
        this.selectedId=id;
        this.router.navigate(['/article', this.selectedId]);
    }
}
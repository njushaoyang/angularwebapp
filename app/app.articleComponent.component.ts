import { Component }    from '@angular/core';
import {ArticleService} from './app.article.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
    selector:'article',
    templateUrl:'app/article.html'
})
export class ArticleComponent{
    private article:any;
    constructor(private articleService:ArticleService,
                private route: ActivatedRoute){}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            console.log(id);
            this.articleService.getArticle(id)
                .then(art => this.article=art);
        });
    }
}
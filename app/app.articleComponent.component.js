"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_article_service_1 = require('./app.article.service');
var router_1 = require('@angular/router');
var ArticleComponent = (function () {
    function ArticleComponent(articleService, route) {
        this.articleService = articleService;
        this.route = route;
    }
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            console.log(id);
            _this.articleService.getArticle(id)
                .then(function (art) { return _this.article = art; });
        });
    };
    ArticleComponent = __decorate([
        core_1.Component({
            selector: 'article',
            templateUrl: 'app/article.html'
        }), 
        __metadata('design:paramtypes', [app_article_service_1.ArticleService, router_1.ActivatedRoute])
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;
//# sourceMappingURL=app.articleComponent.component.js.map
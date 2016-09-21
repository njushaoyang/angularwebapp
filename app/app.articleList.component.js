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
var ItemList = (function () {
    function ItemList(articleService, router) {
        var _this = this;
        this.articleService = articleService;
        this.router = router;
        articleService.getArticles(0, 10).then(function (data) {
            _this.articleList = data.content;
            _this.totalElements = data.totalElements;
            _this.totalPages = data.totalPages;
            _this.numberOfElements = data.numberOfElements;
            _this.currentPage = data.number + 1;
            _this.firstPage = data.firstPage;
            _this.lastPage = data.lastPage;
        });
    }
    ItemList.prototype.changePage = function (page) {
        var _this = this;
        this.articleService.getArticles(page, 1).then(function (data) {
            _this.articleList = data.content;
            _this.totalElements = data.totalElements;
            _this.totalPages = data.totalPages;
            _this.numberOfElements = data.numberOfElements;
            _this.currentPage = data.number + 1;
            _this.firstPage = data.firstPage;
            _this.lastPage = data.lastPage;
        });
    };
    ItemList.prototype.onSelect = function (id) {
        this.selectedId = id;
        this.router.navigate(['/article', this.selectedId]);
    };
    ItemList = __decorate([
        core_1.Component({
            selector: 'item-list',
            templateUrl: 'app/articlelist.html'
        }), 
        __metadata('design:paramtypes', [app_article_service_1.ArticleService, router_1.Router])
    ], ItemList);
    return ItemList;
}());
exports.ItemList = ItemList;
//# sourceMappingURL=app.articleList.component.js.map
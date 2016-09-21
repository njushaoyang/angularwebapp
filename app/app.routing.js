"use strict";
var router_1 = require('@angular/router');
var app_logpage_component_1 = require('./app.logpage.component');
var app_articleList_component_1 = require('./app.articleList.component');
var app_articleComponent_component_1 = require('./app.articleComponent.component');
var appRoutes = [
    {
        path: '',
        component: app_articleList_component_1.ItemList
    },
    {
        path: 'signin',
        component: app_logpage_component_1.LogComponent
    },
    {
        path: 'article/:id',
        component: app_articleComponent_component_1.ArticleComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
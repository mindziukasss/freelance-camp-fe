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
var core_1 = require("@angular/core");
var DocumentsComponent = (function () {
    function DocumentsComponent() {
        this.pageTitle = 'Document Dashboard';
        this.documents = [
            {
                title: "My first Doc",
                description: 'addsfdfsd fsgf',
                file_url: 'http://google.com',
                updated_at: '01/09/17',
                image_url: 'http://www.top-gadgets.net/gallery/things-you-should-know-before-hiring-a-freelancer-picture/Things-you-should-know-before-hiring-a-freelancer.jpg',
            },
            {
                title: "My second Doc",
                description: 'addsfdfsd fsgf',
                file_url: 'http://google.com',
                updated_at: '01/09/17',
                image_url: 'https://udemy-images.udemy.com/course/750x422/54155_ffa4_6.jpg',
            },
            {
                title: "My Last Doc",
                description: 'addsfdfsd fsgf',
                file_url: 'http://google.com',
                updated_at: '01/09/17',
                image_url: 'https://www.policygenius.com/blog/library/uploads/2015/07/Freelancer-Long-Term-Disability-Featured.png',
            }
        ];
    }
    return DocumentsComponent;
}());
DocumentsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'documents',
        templateUrl: 'documents.component.html',
        styleUrls: ['documents.component.css']
    }),
    __metadata("design:paramtypes", [])
], DocumentsComponent);
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map
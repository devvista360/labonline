var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
var HomeComponent = (function () {
    function HomeComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.message = 'Home ASP.NET Core API';
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (this.authService.isAuthenticated()) {
            switch (this.authService.getUserType()) {
                case 'P':
                case 'M':
                case 'E':
                    this.router.navigate(['/exams']);
                    break;
                case 'S':
                    this.router.navigate(['/users']);
                    break;
            }
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Component({
        selector: 'home-component',
        templateUrl: 'home.component.html'
    }),
    __metadata("design:paramtypes", [Router,
        AuthService])
], HomeComponent);
export { HomeComponent };

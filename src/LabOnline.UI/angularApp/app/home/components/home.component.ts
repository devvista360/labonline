import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
    selector: 'home-component',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

    public message: string;

    constructor(
        private router: Router,
        private authService: AuthService) {
        this.message = 'Loading...';
    }

    ngOnInit() {
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
        } else {
            this.router.navigate(['/login']);
        }
    }
}

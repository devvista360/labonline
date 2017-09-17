import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.component.html'
})

export class NavigationComponent {
    public constructor(public auth: AuthService) {
    }
    public logout() {
        this.auth.logout();
    }
 }
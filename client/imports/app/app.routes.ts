import { Route } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component'; 
import { DemoComponent } from './demo/demo.component';

export const routes: Route[] = [
    { path: '', component: DemoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
];
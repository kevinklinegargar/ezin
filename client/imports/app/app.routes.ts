import { Route } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component'; 
import { MainComponent } from './dashboard/main/main.component';
import { ChannelsComponent } from './dashboard/channels/channels.component';

export const routes: Route[] = [
    { path: '', component: MainComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'channels', component: ChannelsComponent }
];
import { Routes } from '@angular/router';
import { SignUpComponent } from './signUp/SignUp.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

const ROUTES: Routes = [
    { path: 'signup', component: SignUpComponent },
    { path: 'user', component: UserComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];


export { ROUTES };
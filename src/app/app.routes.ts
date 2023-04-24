import { Routes } from '@angular/router';
import { SignUpComponent } from './signUp/SignUp.component';
import { UserComponent } from './user/user.component';

const ROUTES: Routes = [
    { path: 'signup', component: SignUpComponent },
    { path: 'user', component: UserComponent },
];

export { ROUTES };
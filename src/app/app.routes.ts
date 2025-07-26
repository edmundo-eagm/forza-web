import { Routes } from '@angular/router';
import { ProductListComponent } from './product/list/product-list.component';
import { ProductFormComponent } from './product/form/product-form.component';
import { LoginFormComponent } from './login/form/login-form.component';
import { SigninFormComponent } from './signin/form/signin-form.component';
import { authGuard } from '../shared/guard/auth-guard';

export const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products/:id', component: ProductFormComponent, canActivate: [authGuard] },
    { path: 'products', component: ProductListComponent, canActivate: [authGuard] },
    { path: 'login', component: LoginFormComponent },
    { path: 'signin', component: SigninFormComponent },
    { path: '**', redirectTo: 'products' }
];

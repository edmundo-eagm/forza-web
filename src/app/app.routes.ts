import { Routes } from '@angular/router';
import { ProductListComponent } from './product/list/product-list.component';
import { ProductFormComponent } from './product/form/product-form.component';

export const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    // { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent },
    { path: 'products/:id', component: ProductFormComponent },
    { path: 'products', component: ProductListComponent },
    // { path: 'products/edit/:id', component: ProductFormComponent },
    { path: '**', redirectTo: 'products' }
];

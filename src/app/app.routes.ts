import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './product/list/product-list.component';
import { ProductFormComponent } from './product/form/product-form.component';

export const routes: Routes = [
    // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    // { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent },
    // { path: 'dashboard', component: DashboardComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'products/new', component: ProductFormComponent },
    // { path: 'products/edit/:id', component: ProductFormComponent },
    // { path: '**', redirectTo: 'dashboard' }
];

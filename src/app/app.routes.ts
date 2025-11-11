import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { autenticacaoGuard } from './services/autenticacao.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [autenticacaoGuard]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [autenticacaoGuard]
    },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];

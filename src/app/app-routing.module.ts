import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './view/welcome/welcome.component';
import {SignUpComponent} from './view/sign-up/sign-up.component';
import {SignInComponent} from './view/sign-in/sign-in.component';
import {NotFoundComponent} from './view/not-found/not-found.component';
import {HomeGuard} from './guard/home.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/welcome'
  },
  {
    component: WelcomeComponent,
    path: 'welcome'
  },
  {
    component: SignUpComponent,
    path: 'sign-up'
  },
  {
    component: SignInComponent,
    path: 'sign-in'
  },
  {
    path: 'home',
    loadChildren: () => import('./view/home/home.module').then(m => m.HomeModule),
    data: { preload: true },
    canActivate: [HomeGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

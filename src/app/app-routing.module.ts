import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule)
  },  
  {
    path: 'transactions',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule)
  },  
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then( m => m.UserModule)
  }, 
  {
    path: 'cards',
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardModule),

   runGuardsAndResolvers: 'always',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

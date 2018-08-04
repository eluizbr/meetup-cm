import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: '../app/modules/layout/layout.module#LayoutModule'
  },

  {
    path: 'login',
    loadChildren: '../app/modules/access/access.module#AccessModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

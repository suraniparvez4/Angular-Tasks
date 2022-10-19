import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParvezforgotPasswordComponent } from './components/parvezforgot-password/parvezforgot-password.component';
import { ParvezloginComponent } from './components/parvezlogin/parvezlogin.component';
import { ParveznotFoundComponent } from './components/parveznot-found/parveznot-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes:Routes=[
  {path: 'login',component:ParvezloginComponent},
  {path:'forgot-password',component:ParvezforgotPasswordComponent},
  {path:'admin',canActivate:[AuthGuard],loadChildren:()=> import('./modules/admin/admin.module').then((m)=>m.AdminModule)},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path: '**', component: ParveznotFoundComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

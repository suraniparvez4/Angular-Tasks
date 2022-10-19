import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParvezAboutComponent } from './components/parvez-about/parvez-about.component';
import { ParvezContactComponent } from './components/parvez-contact/parvez-contact.component';
import { ParvezHomeComponent } from './components/parvez-home/parvez-home.component';
import { ParvezServicesComponent } from './components/parvez-services/parvez-services.component';
import { ParvezadminDashboardComponent } from './components/parvezadmin-dashboard/parvezadmin-dashboard.component';

const routes: Routes = [
  {path: '', component: ParvezadminDashboardComponent,
   children:[
    {path: 'home',component:ParvezHomeComponent},
    {path: 'about',component:ParvezAboutComponent},
    {path: 'services',component:ParvezServicesComponent},
    {path: 'contact',component:ParvezContactComponent},
    {path: '',redirectTo:'/admin/home',pathMatch:'full'},
   ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

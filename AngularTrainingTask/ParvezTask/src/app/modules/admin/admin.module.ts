import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ParvezadminDashboardComponent } from './components/parvezadmin-dashboard/parvezadmin-dashboard.component';
import { ParvezHomeComponent } from './components/parvez-home/parvez-home.component';
import { ParvezAboutComponent } from './components/parvez-about/parvez-about.component';
import { ParvezContactComponent } from './components/parvez-contact/parvez-contact.component';
import { ParvezServicesComponent } from './components/parvez-services/parvez-services.component';
import { ParvezHeaderComponent } from './components/parvez-header/parvez-header.component';
import { ParvezFooterComponent } from './components/parvez-footer/parvez-footer.component';


@NgModule({
  declarations: [
    ParvezadminDashboardComponent,
    ParvezHomeComponent,
    ParvezAboutComponent,
    ParvezContactComponent,
    ParvezServicesComponent,
    ParvezHeaderComponent,
    ParvezFooterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

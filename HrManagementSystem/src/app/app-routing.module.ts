import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AddEmployeeComponent } from './add-employee/add-employee.component';
// import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
// import { EmployeeComponent } from './show-employee/show-employee.component';

const routes: Routes = [
  {
    path:'employees',
    loadChildren: () => import('./show-employee/show-employee.module').then(m => m.EmployeeModule)
  }
  // {path:'show',component:ShowEmployeeComponent},
  // {path:'edit/:id',component:EditEmployeeComponent},
  // {path:'add',component:AddEmployeeComponent},
  // {path:'',component:ShowEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

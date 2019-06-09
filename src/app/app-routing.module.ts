import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeActionComponent } from './employee-action/employee-action.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'customer' },
  { path: 'customer', component: CustomerComponent },
  { path: 'addEdit/:id', component: EmployeeActionComponent },
  { path: 'customerDetail', component: CustomerDetailsComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeActionComponent } from './employee-action/employee-action.component'
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { SearchPipe } from './shared/pipe/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    SearchPipe,
    EmployeeActionComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

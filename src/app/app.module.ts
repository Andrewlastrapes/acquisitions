import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CompaniesService } from "./services/companies/companies.service";
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { IndividualCompanyComponent } from './components/individual-company/individual-company.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IndividualCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgbModule
  ],
  providers: [CompaniesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

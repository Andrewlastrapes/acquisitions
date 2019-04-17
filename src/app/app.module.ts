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
import { ModalComponent } from './components/modal/modal.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from "@angular/forms";
import { AddTargetComponent } from './components/add-target/add-target.component';
import { SuccessModalComponent } from './components/success-modal/success-modal.component';
import { ModalService } from "../app/services/modal/modal.service";
import { TargetAddedModalComponent } from './components/target-added-modal/target-added-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IndividualCompanyComponent,
    ModalComponent,
    LoginComponent,
    AddTargetComponent,
    SuccessModalComponent,
    TargetAddedModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgbModule,
    Ng4LoadingSpinnerModule.forRoot(),
    FormsModule
  ],
  providers: [CompaniesService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

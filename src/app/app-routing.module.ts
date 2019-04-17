import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SuccessModalComponent } from './components/success-modal/success-modal.component';
import { TargetAddedModalComponent } from './components/target-added-modal/target-added-modal.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "modal",
    component: ModalComponent
  },
  {
    path: "success-modal",
    component: SuccessModalComponent
  },
  {
    path: "target-added-modal",
    component: TargetAddedModalComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

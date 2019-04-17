import { Component, OnInit } from '@angular/core';
import { CompaniesService } from "../../services/companies/companies.service";
import { Company } from "../../Company";
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from "../modal/modal.component";
import { Status } from "../../Status";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ActivatedRoute } from '@angular/router';
import { AddTargetComponent } from "../add-target/add-target.component";
import { SuccessModalComponent } from "../success-modal/success-modal.component";
import { ModalService } from "../../services/modal/modal.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  targets: Company[];
  currentUser: string;

  constructor(
    private companiesSer: CompaniesService,
    private modalService: ModalService,
    private spinner: Ng4LoadingSpinnerService,
    private route: ActivatedRoute
    ) {
      this.spinner.show()
     }

  getCompanies(){
    this.companiesSer.getCompanies()
    .subscribe(data => {
      this.targets = data
      this.spinner.hide()
      }
    )
   }

   changeStatus(t, status){
     t['status'] = status
   }

  openModal(t){
    this.modalService.openModal(t, 'optionModal').then(data => {
      if (!data) {
        return;
      } else {
        this.changeStatus(t, data)
        this.modalService.openModal(t, 'successModal')
      }
    })
  }

  getCurrentUser(){
    this.route.queryParams.subscribe(user => this.currentUser = user["username"])
  }

  onOutputTarget(e){
    this.targets.unshift(e)
  }

  ngOnInit() {
    this.getCurrentUser()
    this.getCompanies()
  }

}

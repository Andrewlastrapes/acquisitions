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
    private modalService: NgbModal,
    private spinner: Ng4LoadingSpinnerService,
    private route: ActivatedRoute
    ) {
      this.spinner.show()
     }

  getCompanies(){
    this.companiesSer.getCompanies()
    .subscribe(data => {
      this.spinner.hide()
      this.targets = data
      }
    )
   }

   changeStatus(t, status){
     t['status'] = status
   }

  openModal(t){
    
    const modalRef = this.modalService.open(ModalComponent, { size: 'lg' })
    modalRef.componentInstance.name = t.name;
    modalRef.result.then(data => {
      if (!data) {
        return;
      } else {
        this.changeStatus(t, data)
      }
    })
  }

  getCurrentUser(){
    this.route.queryParams.subscribe(user => this.currentUser = user["username"])
  }

  ngOnInit() {
    this.getCurrentUser()
    this.getCompanies()
  }

}

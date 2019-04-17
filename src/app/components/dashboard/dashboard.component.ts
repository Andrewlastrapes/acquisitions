import { Component, OnInit } from '@angular/core';
import { CompaniesService } from "../../services/companies/companies.service";
import { Company } from "../../Company";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ActivatedRoute } from '@angular/router';
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

   changeStatus(t: Company, status: string){
     t['status'] = status
   }

  openModal(t: Company){
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

  onOutputTarget(e: Company){
    this.targets.unshift(e)
  }

  ngOnInit() {
    this.getCurrentUser()
    this.getCompanies()
  }

}

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
  researching: Company[] = [];
  pendingApproval: Company[] = [];
  approved: Company[] = [];
  declined: Company[] = [];


  currentUser: string;

  constructor(
    private companiesSer: CompaniesService,
    private modalService: ModalService,
    private spinner: Ng4LoadingSpinnerService,
    private route: ActivatedRoute
  ) {
    this.spinner.show()
  }

  getCompanies() {
    this.companiesSer.getCompanies()
      .subscribe(data => {
        this.targets = data
        this.spinner.hide()
      }
      )
  }

  changeStatus(t: Company, status: string, oldStatus: string) {

    let categoryArr = []

    if(status === oldStatus){
      return;
    }

    switch (oldStatus) {
      case 'targets':
        categoryArr = this.targets;
        break;
      case 'researching':
        categoryArr = this.researching;
        break;
      case 'pendingApproval':
        categoryArr = this.pendingApproval;
        break
      case 'approved':
        categoryArr = this.approved
        break;
      case 'declined':
        categoryArr = this.declined
        break
    }

    switch (status) {
      case "targets":
        this.targets.push(t);
        break;
      case "researching":
        this.researching.push(t);
        break;
      case "pendingApproval":
        this.pendingApproval.push(t);
        break;
      case "approved":
        this.approved.push(t);
        break;
      case "declined":
        this.declined.push(t);
        break;
    }

    for (let i = 0; i < categoryArr.length; i++) {
      if (categoryArr[i] === t) {
        categoryArr.splice(i, 1)
      }
    }
    this.modalService.openModal(t, 'successModal')


  }

  openModal(t: Company, oldStatus: string) {
    this.modalService.openModal(t, 'optionModal').then(data => {
      if (!data) {
        return;
      } else {
        this.changeStatus(t, data, oldStatus)
      }
    })
  }

  getCurrentUser() {

    this.route.queryParams.subscribe(user => this.currentUser = user["username"])
  }

  onOutputTarget(e: Company) {
    this.targets.unshift(e)
  }

  ngOnInit() {
    this.getCurrentUser()
    this.getCompanies()
  }

}

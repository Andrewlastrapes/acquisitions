import { Component, OnInit } from '@angular/core';
import { CompaniesService } from "../../services/companies/companies.service";
import { Company } from "../../Company";
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from "../modal/modal.component";
import { Status } from "../../Status";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  targets: Company[];

  constructor(
    private companiesSer: CompaniesService,
    private modalService: NgbModal
    ) { }

  getCompanies(){
    this.companiesSer.getCompanies()
    .subscribe(data => {
      this.targets = data
      }
    )
   }

   changeStatus(t, status){
     console.log(Status)
     t['status'] = status
     console.log(this.targets)
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


  ngOnInit() {
    this.getCompanies()
  }

}

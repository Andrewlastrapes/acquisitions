import { Component, OnInit } from '@angular/core';
import { CompaniesService } from "../../services/companies/companies.service";
import { Company } from "../../Company";
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  companies: Company[];

  constructor(private companiesSer: CompaniesService) { }

  getCompanies(){
    this.companiesSer.getCompanies()
    .subscribe(data => {
      this.companies = data
      console.log(this.companies)
    }
    )
   
  }

  ngOnInit() {
    this.getCompanies()
  }

}

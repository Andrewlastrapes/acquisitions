import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from "../../Company";

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }


  getCompanies(){
    let url = 'api/companies'
    return this.http.get<Company[]>(url)
  }


}

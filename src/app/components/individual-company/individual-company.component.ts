import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-individual-company',
  templateUrl: './individual-company.component.html',
  styleUrls: ['./individual-company.component.css']
})
export class IndividualCompanyComponent implements OnInit {

  @Input() name;
  @Input() location;
  @Input() employees;
  @Input() totalRaised

  constructor() { }

   formatTotalRaised(num) {
    return `$${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`
  }

  ngOnInit() {
    
  }

}

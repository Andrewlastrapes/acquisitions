import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Company } from "../../Company";


@Component({
  selector: 'app-add-target',
  templateUrl: './add-target.component.html',
  styleUrls: ['./add-target.component.css']
})

export class AddTargetComponent implements OnInit {

  location: string;
  employees: string;
  logo: string;
  totalRaised: string;

  target = {}
  @Output() outputTarget: EventEmitter<any> = new EventEmitter

  constructor() { }

  onSubmit(){
    this.target = {
      location: this.location,
      employees: this.employees,
      logo: this.logo,
      totalRaised: this.totalRaised,
      status: "target"
    }
    this.outputTarget.emit(this.target)
    
  }

  ngOnInit() {
  }

}

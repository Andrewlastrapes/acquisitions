import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ModalService } from "../../services/modal/modal.service";



@Component({
  selector: 'app-add-target',
  templateUrl: './add-target.component.html',
  styleUrls: ['./add-target.component.css']
})

export class AddTargetComponent implements OnInit {

  name: string
  location: string;
  employees: string;
  logo: string;
  totalRaised: string;
  submitError: boolean=false;
  errMessage: string;


  target = {}
  @Output() outputTarget: EventEmitter<any> = new EventEmitter

  constructor(public modalService: ModalService) { }

  onSubmit(){
  
    this.target = {
      name: this.name,
      location: this.location,
      employees: this.employees,
      logo: this.logo,
      totalRaised: this.totalRaised,
      status: "target"
    }

    let targetValues = Object.values(this.target)
    for(let val in targetValues){
      if(!targetValues[val]){
        this.errMessage = "Please fill out entire form"
        this.submitError = true;
        return;
      }
    }
    this.submitError = false;
    this.outputTarget.emit(this.target)
    this.modalService.openModal(this.name, "targetAdded").then(data => console.log(data))


  }

  ngOnInit() {
  }

}

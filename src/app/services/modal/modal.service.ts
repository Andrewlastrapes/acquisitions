import { Injectable } from '@angular/core';
import { SuccessModalComponent } from "../../components/success-modal/success-modal.component";
import { ModalComponent } from "../../components/modal/modal.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TargetAddedModalComponent } from "../../components/target-added-modal/target-added-modal.component";
import { Company } from 'src/app/Company';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) { }

  openModal(t: Company, type: string) {
    if (type === "optionModal") {
      const modalRef = this.modalService.open(ModalComponent, { size: 'lg' });
      modalRef.componentInstance.name = t.name;
      return modalRef.result.then(data => {
        return data
      })
    } else if (type === "successModal") {
      const modalRef = this.modalService.open(SuccessModalComponent, {centered: true})
        modalRef.componentInstance.name = t.name;
        return modalRef.result.then(() => modalRef.close)
    } else if(type === "targetAdded"){
      const modalRef = this.modalService.open(TargetAddedModalComponent, {centered: true})
        modalRef.componentInstance.name = t.name;
        return modalRef.result.then(() => modalRef.close)
    }
  }
}

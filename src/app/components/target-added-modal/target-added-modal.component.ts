import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-target-added-modal',
  templateUrl: './target-added-modal.component.html',
  styleUrls: ['./target-added-modal.component.css']
})
export class TargetAddedModalComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { }

  @Input() name;

  ngOnInit() {
  }

}

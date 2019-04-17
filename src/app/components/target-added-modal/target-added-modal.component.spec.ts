import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetAddedModalComponent } from './target-added-modal.component';

describe('TargetAddedModalComponent', () => {
  let component: TargetAddedModalComponent;
  let fixture: ComponentFixture<TargetAddedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetAddedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetAddedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

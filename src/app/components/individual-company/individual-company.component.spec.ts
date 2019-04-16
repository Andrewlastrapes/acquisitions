import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualCompanyComponent } from './individual-company.component';

describe('IndividualCompanyComponent', () => {
  let component: IndividualCompanyComponent;
  let fixture: ComponentFixture<IndividualCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

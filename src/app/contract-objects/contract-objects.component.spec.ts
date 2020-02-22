import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractObjectsComponent } from './contract-objects.component';

describe('ContractObjectsComponent', () => {
  let component: ContractObjectsComponent;
  let fixture: ComponentFixture<ContractObjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractObjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

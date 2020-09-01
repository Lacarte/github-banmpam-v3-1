import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeliverConfirmationComponent } from './dialog-deliver-confirmation.component';

describe('DialogDeliverConfirmationComponent', () => {
  let component: DialogDeliverConfirmationComponent;
  let fixture: ComponentFixture<DialogDeliverConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDeliverConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeliverConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

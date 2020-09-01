import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSendConfirmationComponent } from './dialog-send-confirmation.component';

describe('DialogSendConfirmationComponent', () => {
  let component: DialogSendConfirmationComponent;
  let fixture: ComponentFixture<DialogSendConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSendConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSendConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

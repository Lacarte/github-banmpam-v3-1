import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSendHistoryComponent } from './dialog-send-history.component';

describe('DialogSendHistoryComponent', () => {
  let component: DialogSendHistoryComponent;
  let fixture: ComponentFixture<DialogSendHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSendHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSendHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

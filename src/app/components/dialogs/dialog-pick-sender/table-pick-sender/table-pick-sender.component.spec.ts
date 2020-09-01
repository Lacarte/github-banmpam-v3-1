import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { TablePickSenderComponent } from './table-pick-sender.component';

describe('TablePickSenderComponent', () => {
  let component: TablePickSenderComponent;
  let fixture: ComponentFixture<TablePickSenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePickSenderComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePickSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

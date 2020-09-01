import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { SendHistory } from './models/Isend-history';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { SendHistoryService } from '../../../../services/send-history.service';


@Component({
  selector: 'app-send-history',
  templateUrl: './send-history.component.html',
  styleUrls: ['./send-history.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SendHistoryComponent implements OnInit, AfterViewInit {


  // displayedColumns: string[] = ['created', 'state', 'number', 'title'];


  displayedColumns: string[] = [
    'transaction',
    'reference',
    'value',
    'total',
    'gift_description',
    'created_at',
    'sender_firstname',
    'sender_lastname',
    'receiver_firstname',
    'receiver_lastname',
    'updated_at',
    'status'];

  dataSource: SendHistory[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  dataElement: SendHistory | null;

  constructor(private sendHistory: SendHistoryService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    // If the user changes the sort order, reset back to the first page.
    // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    // merge()
    //   .pipe(
    //     startWith({}),
    //     switchMap(() => {
    //       this.isLoadingResults = true;
    //       return this.sendHistory.getAll();
    //     }),
    //     catchError(() => {
    //       this.isLoadingResults = false;
    //       // Catch if the GitHub API has reached its rate limit. Return empty data.
    //       this.isRateLimitReached = true;
    //       return observableOf([]);
    //     })
    //   )
    this.sendHistory.getAll().subscribe(data => {
      this.isLoadingResults = true;
      this.dataSource = data;
      console.log(data);
    },
      // on error
      () => { },
      // on complete
      () => {
        this.isLoadingResults = false;
      }
    );
  }


hello(e) {
  console.log(e);
}

applyFilter(filterValue: string) {
 // this.dataSource.filter = filterValue.trim().toLowerCase();

}



}

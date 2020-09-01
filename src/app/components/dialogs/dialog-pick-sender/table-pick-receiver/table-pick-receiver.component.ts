import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TablePickReceiverDataSource, TablePickReceiverItem } from './table-pick-receiver-datasource';
import { SendGiftService } from '../../../../services/send-gift.service';


@Component({
  selector: 'app-table-pick-receiver',
  templateUrl: './table-pick-receiver.component.html',
  styleUrls: ['./table-pick-receiver.component.scss']
})


export class TablePickReceiverComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TablePickReceiverItem>;
  dataSource: TablePickReceiverDataSource;

  filterChecked = false;


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'firstName', 'lastName', 'phone', 'idDoc'];


  constructor(private _sendGiftService: SendGiftService) { }



  ngOnInit() {
    this.dataSource = new TablePickReceiverDataSource();

    this._sendGiftService.getSenders().subscribe(
     res => this.dataSource.data = res
    );


  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  applyFilter(filterValue: string) {
    // filterValue = filterValue.trim(); // Remove whitespace
    // filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    // this.dataSource.filter = filterValue;
  }


}







import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TablePickSenderDataSource, TablePickSenderItem } from './table-pick-sender-datasource';
import { SelectionModel } from '@angular/cdk/collections';
import { SendGiftService } from '../../../../services/send-gift.service';

@Component({
  selector: 'app-table-pick-sender',
  templateUrl: './table-pick-sender.component.html',
  styleUrls: ['./table-pick-sender.component.scss']
})
export class TablePickSenderComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TablePickSenderItem>;
  dataSource: TablePickSenderDataSource;

  filterChecked = false;


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'firstName', 'lastName', 'phone', 'idDoc'];
  selection = new SelectionModel<TablePickSenderItem>(false, []);


  constructor(private _sendGiftService: SendGiftService) { }



  ngOnInit() {
    this.dataSource = new TablePickSenderDataSource();
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
   // console.log(this.selection.toggle);
    // filterValue = filterValue.trim(); // Remove whitespace
    // filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    // this.dataSource.filter = filterValue;
  }


}







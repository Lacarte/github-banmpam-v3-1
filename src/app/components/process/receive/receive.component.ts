import { Component, OnInit , ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog';
import { DialogPickSenderComponent } from '../../dialogs/dialog-pick-sender/dialog-pick-sender.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { GiftView } from './models/gift_view';
import { DialogDeliverConfirmationComponent } from '../../dialogs/dialog-deliver-confirmation/dialog-deliver-confirmation.component';
import { GiftViewService } from '../../../services/gift-view.service';
import { DeliverGiftService } from '../../../services/deliver-gift.service';
import { fadeInOut, toggleState } from '../../../shared/animations';


interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.scss'],
  animations: [
    fadeInOut,toggleState
  ]
})

export class ReceiveComponent implements OnInit {


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  isOpenedFilterSearch = false;


  selectedValue: string;
  value = '';
  panelOpenState = false;
  isExpanded = false;
  isLoading = false;
  isFoundGift = false;
  isCleared = true;
  isGiftSent = false;
  keypressCount = 0;

  gift: GiftView = {
    transaction: null,
    reference: null,
    value: 0,
    total: 0,
    description: null,
    created_at: null,
    updated_at: null,
    sender_fullname: null,
    receiver_fn: null,
    receiver_ln: null,
    status: null,
    destination: null,
    origin: null,
    is_received: false
  };

get stateNameGift() {
return this.isFoundGift ? 'show' : 'hide';
}

get stateNameNoResult() {
return this.isFoundGift ? 'hide' : 'show';
}

  public searchReferenceForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    searchRef: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.pattern('^[a-zA-Z0-9]*$')
    ])
  });

  constructor(
    public dialog: MatDialog,
    private giftViewService: GiftViewService,
    private deliverGiftService: DeliverGiftService
  ) {}
  ngOnInit() {    this.dataSource.paginator = this.paginator;
  }



   toggleFilterSearch(){
     this.isOpenedFilterSearch =! this.isOpenedFilterSearch;
   }

  public dialogPickSender() {
    this.dialog.open(DialogPickSenderComponent);
  }

  public searchReference() {
    if (this.searchReferenceForm.valid) {
      this.isLoading = true;
      this.isCleared = true;
      // this.isExpanded = false;
      // this.isFoundGift = false;

      setTimeout(() => {
        this.giftViewService
          .get(this.searchReferenceForm.get('searchRef').value)
          // .map((res: Response) => {})
          .subscribe(giftData => {
            if (Object.keys(giftData).length > 0) {
              this.gift = giftData;
              this.isFoundGift = true;
              this.isExpanded = true;
              if (this.gift.status.toLowerCase() === 'sent') {
                this.isGiftSent = true;
              } else {
                this.isGiftSent = false;
              }
            } else if (this.isFoundGift) {
              this.isFoundGift = false;
            }
          });
        this.isLoading = false;
        // this.isCleared = false;
      }, 250);
    }
  }

  public deliver() {
    const dialogRef = this.dialog.open(DialogDeliverConfirmationComponent, {
      // height: '80%',
      width: '40%'
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {});

    // this.deliverGiftService.create({gift_id: this.gift.transaction, _key_user: 1, descripcion_estado_gift_id: 2}).subscribe(data => {
    //   console.log('done deliver');
    // });
  }

  public keyPress(ev: any) {
    if (this.searchReferenceForm.get('searchRef').value.length >= 2) {
      this.isCleared = true;
    }
  }
}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
]
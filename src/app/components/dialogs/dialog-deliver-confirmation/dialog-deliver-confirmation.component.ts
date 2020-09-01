import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-deliver-confirmation',
  templateUrl: './dialog-deliver-confirmation.component.html',
  styleUrls: ['./dialog-deliver-confirmation.component.scss']
})
export class DialogDeliverConfirmationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogDeliverConfirmationComponent>) { }

  ngOnInit() {
  }

}

import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-logout',
  templateUrl: './dialog-logout.component.html',
  styleUrls: ['./dialog-logout.component.scss']
})




export class DialogLogoutComponent implements OnInit {
  constructor( public dialogRef: MatDialogRef<DialogLogoutComponent>) { }

  ngOnInit() {
  }


  onYesClick(): void {
    this.dialogRef.close(true);
  }



}


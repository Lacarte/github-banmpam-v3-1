import { Component, OnInit } from '@angular/core';
import { DialogSendHistoryComponent } from '../dialogs/dialog-send-history/dialog-send-history.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {

  constructor( private dialog: MatDialog,
    ) { }

  ngOnInit() {
  }



  dialogSendHistory() {
    const dialogRef = this.dialog.open(DialogSendHistoryComponent, {
      height: '80%',
      width: '90%',
        });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {

    });
  }

}

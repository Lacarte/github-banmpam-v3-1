import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClipboardService } from 'ngx-clipboard';
import { IGiftData } from '../../../models/Igift-data';

@Component({
  selector: 'app-dialog-send-confirmation',
  templateUrl: './dialog-send-confirmation.component.html',
  styleUrls: ['./dialog-send-confirmation.component.scss']
})
export class DialogSendConfirmationComponent implements OnInit {

  constructor(private clipboardService: ClipboardService,
              public dialogRef: MatDialogRef<DialogSendConfirmationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IGiftData) { }
isCopied: boolean;
  ngOnInit() {
    console.log(this.data);
  }


  copy(text: string) {
    if (this.clipboardService.copyFromContent(text)) {
      this.isCopied = true;
    } else {
      this.isCopied = false;
    }


  }

   okBtn(): void {
     console.log('Close');
     this.dialogRef.close();
   }

}

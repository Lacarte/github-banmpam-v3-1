import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-login-bottomsheet',
  templateUrl: './login-bottomsheet.component.html',
  styleUrls: ['./login-bottomsheet.component.css']
})
export class LoginBottomsheetComponent implements OnInit {



  constructor(private _bottomSheetRef: MatBottomSheetRef<LoginBottomsheetComponent>) {}

  ngOnInit() {
  }


  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }


}





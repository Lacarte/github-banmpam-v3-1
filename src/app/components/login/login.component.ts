import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

import { AuthService } from "../../services/auth.service";
import { SidenavService } from "../../services/sidenav.service";
import { UIService } from "../../shared/ui.service";
import { DataService } from "../../services/data.service";
import { Login } from "../../shared/interfaces/login";
import { LoginBottomsheetComponent } from "../login-bottomsheet/login-bottomsheet.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  login: Login = {
    username: null,
    password: null
  };

  hide = true;

  // form: FormGroup;
  private formSubmitAttempt: boolean;

  public loginForm: FormGroup = new FormGroup({
    $key: new FormControl(null),

    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3)
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(3)
    ])
  });

  constructor(
    // private fb: FormBuilder,
    public authService: AuthService,
    private uiService: UIService,
    private dataService: DataService
  ) {
    this.authService.logout();
  }

  ngOnInit() {
    // this.form = this.fb.group({
    //// userName: ['', Validators.required],
    // password: ['', Validators.required]
    // });
    //this.sidebarService.hide();
    //   this.uiService.sideNavIsOpen=false;
    console.log("Init");
  }

  ngAfterViewInit() {
    // doing something with my ViewChild
    // this.sidebarService.hide();
  }

  // isFieldInvalid(field: string) {
  //   return (
  //     (!this.form.get(field).valid && this.form.get(field).touched) ||
  //     (this.form.get(field).untouched && this.formSubmitAttempt)
  //   );
  // }

  public initializeFormGroup() {
    this.loginForm.setValue({
      $key: null,
      username: "",
      password: ""
    });
  }

  onSubmit(form: NgForm) {
    console.log(form.valid);

    if (form.valid) {
   
      console.log(this.login);

      this.authService.loginProcess(this.login).subscribe(
        result => {
          console.log("success", result);
        },
        error => console.log("error", error)
      );
    }


  }



  openBottomSheet(): void {
    this._bottomSheet.open(LoginBottomsheetComponent);
  }



}

import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

import { AuthService } from "../../services/auth.service";
import { SidenavService } from "../../services/sidenav.service";
import { UIService } from "../../shared/ui.service";
import { DataService } from "../../services/data.service";
import { Login } from "../../shared/interfaces/login";
import { LoginBottomsheetComponent } from "../login-bottomsheet/login-bottomsheet.component";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  login: Login = {
    email: null,
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
    public authenticationService: AuthenticationService,
    private uiService: UIService,
    private dataService: DataService,
     private bottomSheet: MatBottomSheet
  ) {
    this.authenticationService.logout();
  }

  ngOnInit() {
 }

  ngAfterViewInit() {
  }

  public initializeFormGroup() {
    this.loginForm.setValue({
      $key: null,
      email: "",
      password: ""
    });
  }

  onSubmit(form: NgForm) {
    console.log(form.valid);

    if (form.valid) {

    this.authenticationService.signIn(this.login);
  
      /*
         console.log(this.login);
      this.authService.loginProcess(this.login).subscribe(
        result => {
          console.log("success", result);
        },
        error => console.log("error", error)
      );
  
    */
  }

  }



  openBottomSheet(): void {
    this.bottomSheet.open(LoginBottomsheetComponent);
  }



}

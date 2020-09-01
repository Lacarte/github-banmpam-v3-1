import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { SendComponent } from "./components/process/send/send.component";
import { ReceiveComponent } from "./components/process/receive/receive.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./shared/material-module/material.module";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { LayoutModule } from "@angular/cdk/layout";
import { LoginComponent } from "./components/login/login.component";
import { ReceiveTableComponent } from "./components/process/receive/receive-table/receive-table.component";
import { ProcessComponent } from "./components/process/process.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { DialogPickSenderComponent } from "./components/dialogs/dialog-pick-sender/dialog-pick-sender.component";
import { TablePickSenderComponent } from "./components/dialogs/dialog-pick-sender/table-pick-sender/table-pick-sender.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { ServiceRegister } from "./services/service.register";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TablePickReceiverComponent } from "./components/dialogs/dialog-pick-sender/table-pick-receiver/table-pick-receiver.component";
import { DialogSendConfirmationComponent } from "./components/dialogs/dialog-send-confirmation/dialog-send-confirmation.component";
import { DialogSendHistoryComponent } from "./components/dialogs/dialog-send-history/dialog-send-history.component";
import { SendHistoryTableComponent } from "./components/dialogs/dialog-send-history/send-history-table/send-history-table.component";
import { SendHistoryComponent } from "./components/dialogs/dialog-send-history/send-history/send-history.component";
import { NgxPrintModule } from "ngx-print";
import { DialogDeliverConfirmationComponent } from "./components/dialogs/dialog-deliver-confirmation/dialog-deliver-confirmation.component";
import { ClipboardModule } from "ngx-clipboard";
import { DialogLogoutComponent } from "./components/dialogs/dialog-logout/dialog-logout.component";
import { AuthService } from "./services/auth.service";
import { NoAccessComponent } from "./components/no-access/no-access.component";
import { TstComponent } from "./components/tst/tst.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { RoutingModule } from "./routing.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SettingsComponent } from "./components/settings/settings.component";
import { UIService } from "./shared/ui.service";
import { PaymentComponent } from "./components/payment/payment.component";
import { DialogRegisterUserComponent } from "./components/dialogs/dialog-register-user/dialog-register-user.component";
import { DataService } from "./services/data.service";
import { ShellComponent } from "./components/shell/shell.component";
import { LoaderComponent } from "./shared/loader/loader.component";
import { LoaderService } from "./services/loader.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { LoaderInterceptor } from "./services/interceptors/loader.interceptor";
import { LoginBottomsheetComponent } from "./components/login-bottomsheet/login-bottomsheet.component";
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/admin-components/user/user.component';
import { DistributorsComponent } from './components/admin-components/distributors/distributors.component';
import { SettingsOldComponent } from './components/settings-old/settings-old.component';
import { LocationsComponent } from './components/admin-components/locations/locations.component';
import { PermissionsComponent } from './components/admin-components/permissions/permissions.component';
import { RolesClaimsComponent } from './components/admin-components/roles-claims/roles-claims.component';

import { AngularFireFunctionsModule, REGION } from '@angular/fire/functions';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AuthenticationService } from './services/authentication.service';



@NgModule({
  declarations: [
    AppComponent,
    SendComponent,
    ReceiveComponent,
    SidenavComponent,
    LoginComponent,
    ReceiveTableComponent,
    ProcessComponent,
    NotFoundComponent,
    DialogPickSenderComponent,
    TablePickSenderComponent,
    TablePickReceiverComponent,
    DialogSendConfirmationComponent,
    DialogSendHistoryComponent,
    SendHistoryTableComponent,
    SendHistoryComponent,
    DialogDeliverConfirmationComponent,
    DialogLogoutComponent,
    NoAccessComponent,
    TstComponent,
    WelcomeComponent,
    DashboardComponent,
    SettingsComponent,
    PaymentComponent,
    DialogRegisterUserComponent,
    ShellComponent,
    LoaderComponent,
    LoginBottomsheetComponent,
    AdminComponent,
    UserComponent,
    DistributorsComponent,
    SettingsOldComponent,
    LocationsComponent,
    PermissionsComponent,
    RolesClaimsComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPrintModule,
    ClipboardModule,
    LayoutModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireAuthModule,AngularFirestoreModule,AngularFireFunctionsModule,
  ],
  providers: [
    ServiceRegister,
    AuthService,
    UIService,
    DataService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: REGION, useValue: 'us-central1', providers: [AuthenticationService] }


  ],
  bootstrap: [AppComponent],
  exports: [LoginComponent, RouterModule],
  entryComponents: [
    LoginBottomsheetComponent,
    DialogPickSenderComponent,
    DialogSendConfirmationComponent,
    DialogSendHistoryComponent,
    DialogDeliverConfirmationComponent,
    DialogLogoutComponent
  ]
})
export class AppModule {}

import { UIService } from "../../shared/ui.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { Component, OnInit,OnDestroy } from "@angular/core";
import { SidenavService } from "../../services/sidenav.service";
import { ConnectionService } from "ng-connection-service";
import { DialogLogoutComponent } from "../dialogs/dialog-logout/dialog-logout.component";
import { AuthService } from "../../services/auth.service";
import { PingServerService } from "../../services/ping-server.service";
import { AppUserAuth } from "../../security/app-user-auth";
import { Subscription } from "rxjs";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"]
})
export class SidenavComponent implements OnInit,OnDestroy {
  isSidenaveText: boolean;
  ngStyle: string;
  isConnected = true;
  isExpanded = true;
  showSubmenu = false;
  isShowing = false;
  showSubSubMenu = false;
  securityObject: AppUserAuth = null;
  events: string[] = [];
  opened:boolean;
  over = "side";
  displayMode = "flat";
  private isLtMd_Sub:Subscription;
  isLtMd:boolean;

 

  constructor(
    private connectionService: ConnectionService,
    public dialog: MatDialog,
    private authService: AuthService,
    private uiService: UIService
  ) {
    this.securityObject = this.authService.securityObject;
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
    });
    
  }

  ngOnInit() {
   this.isLtMd_Sub = this.uiService.getIsLtMd().subscribe(x => {
      this.opened = !x;
      this.isLtMd = x;
    });

 }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogLogoutComponent, {
      width: "450px"
    });

    dialogRef.afterClosed().subscribe((isLogout: boolean) => {
      console.log("The dialog was closed");
      if (isLogout) {
        this.authService.logout();
        console.log("Logout...");
      }
    });
  }

ngOnDestroy(){
this.isLtMd_Sub.unsubscribe();
}


}

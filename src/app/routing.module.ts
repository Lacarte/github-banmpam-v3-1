import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { NoAccessComponent } from "./components/no-access/no-access.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { TstComponent } from "./components/tst/tst.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ProcessComponent } from "./components/process/process.component";
import { LoginComponent } from "./components/login/login.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { PaymentComponent } from "./components/payment/payment.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { ShellComponent } from "./components/shell/shell.component";
import { AdminComponent } from "./components/admin/admin.component";

const routes: Routes = [
  {
    path: "",
    component: ShellComponent,
    children: [
      { path: "tst", component: TstComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "no-access", component: NoAccessComponent },
      { path: "payment", component: PaymentComponent },
      { path: "proceed", component: ProcessComponent },
      { path: "admin", component: AdminComponent },
      {
        path: "",
        component: WelcomeComponent
      }
      // { path: "not-found", component: NotFoundComponent },
      // { path: "**", component: NotFoundComponent }
    ]
  },
  { path: "login", component: LoginComponent },
  {
    path: "**",
    redirectTo: "/login",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}

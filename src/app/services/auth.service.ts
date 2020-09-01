import { Inject, Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { map, shareReplay, tap } from "rxjs/operators";
import { SidenavService } from "./sidenav.service";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
// import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from "@angular/common/http";
import { URL } from "./conf/endpoinURL";
import { AppUserAuth } from "../security/app-user-auth";
import { UIService } from "../shared/ui.service";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Login } from "../shared/interfaces/login";
import { userAuth } from "../shared/interfaces/user-auth";

@Injectable({
  providedIn: "root"
})
@Injectable()
// export class AuthService implements CanActivate {
export class AuthService {
  environment: any;
  private subject = new BehaviorSubject<User>(null);
  user$: Observable<User> = this.subject.asObservable();
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //   if (true) {
  //     alert('You are not allowed to view this page');
  //     //redirect to login/home page etc
  //     //return false to cancel the navigation
  //     return false;
  //   }
  //   return true;
  // }

  securityObject: AppUserAuth = new AppUserAuth();

  constructor(
    private http: HttpClient,
    private uiService: UIService,
    private router: Router
  ) {
    this.environment = environment;

    // this.isLoggedIn$ = this.user$.pipe(map(user => !!user));
    // this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn));

    const user = localStorage.getItem("AUTH_DATA");

    console.log("user", user);

    if (user) {
      this.subject.next(JSON.parse(user));
    }
  }

  // toggleSideTool() {
  //   console.log('Toggle');
  //   this.toolbarService.toggle();
  //   this.sidebarService.toggle();
  // }

  // showSideTool() {
  //   console.log('Show');
  //   this.sidebarService.show();
  // }

  // hideSideTool() {
  //   console.log('Hide');
  //   this.sidebarService.hide();
  // }

  public auth(uname: string, upwd: string): void {
    // if (uname === 'admin' && upwd === 'admin') {
    //   this.securityObject.userName = 'ADMIN';
    //   this.securityObject.isAuthenticated = true;
    //   this.securityObject.canAccessSend = true;
    //   this.securityObject.canAccessReceive = true;
    //   this.securityObject.canAddUser = true;
    //   this.securityObject.canUpdateUser = true;
    //   this.securityObject.canAccessAdmin = true;
    //   this.uiService.setIsOpen = true;
    //   this.router.navigate(['/process']);
    // } else if (uname === 'user' && upwd === 'user') {
    //   this.securityObject.userName = 'LCRT';
    //   this.securityObject.isAuthenticated = true;
    //   this.securityObject.canAccessSend = true;
    //   this.securityObject.canAccessReceive = true;
    //   this.securityObject.canAddUser = true;
    //   this.securityObject.canUpdateUser = false;
    //   this.securityObject.canAccessAdmin = false;
    //   this.uiService.setIsOpen = true;
    //   this.router.navigate(['/process']);
    // } else {
    //   this.uiService.setIsOpen = false;
    // }
    // this.http.post(`${URL}/auth/token`,
    //   JSON.stringify({ uname, upwd }), {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    //   })
    //   .subscribe(
    //     (response: { resp: string }) => {
    //       console.log(response);
    //     },
    //     (err: HttpErrorResponse) => {
    //       if (err.error instanceof Error) {
    //         console.log('Error:', err.error.message);
    //       } else {
    //         console.log(`Error: ${err.status}, Error Body:  ${err.error}`);
    //       }
    //     }
    //   );
  }

  public getToken(): string {
    return JSON.parse(localStorage.getItem("token"));
  }

  public isAuthenticated(): boolean {
    // get the token
    return localStorage.getItem("token") ? true : false;
  }

  //////////////////////////////////

  resetSecurityObject(): void {
    this.securityObject.userName = "";
    this.securityObject.bearerToken = "";
    this.securityObject.isAuthenticated = false;
    this.securityObject.canAccessSend = false;
    this.securityObject.canAccessReceive = false;
    this.securityObject.canAddUser = false;
    this.securityObject.canUpdateUser = false;
    localStorage.removeItem("bearerToken");
  }

  // login(entity: AppUser): Observable<AppUserAuth> {
  //   // Initialize security object
  //   this.resetSecurityObject();

  //   return this.http.post<AppUserAuth>(API_URL + 'login',
  //     entity, httpOptions).pipe(
  //       tap(resp => {
  //         // Use object assign to update the current object
  //         // NOTE: Don't create a new AppUserAuth object
  //         // because that destroys all references to the object
  //         Object.assign(this.securityObject, resp);
  //         // store token into local storage
  //         localStorage.setItem('bearerToken', this.securityObject.bearerToken);
  //       }));
  // }

  loginProcess(login: Login): Observable<userAuth> {
    // console.log(login);
    //console.log(this.environment);
    return this.http.post<userAuth>(this.environment.apiUrl, login).pipe(
      tap(user => {
        console.log(user);
        this.subject.next(user);
        localStorage.setItem("AUTH_DATA", JSON.stringify(user));
        this.router.navigate(["/"]);
      }),
      shareReplay()
    );
  }

  logout() {
    console.log("logout");
    this.subject.next(null);
    localStorage.removeItem("AUTH_DATA");
    this.uiService.isOpen = false;
    this.router.navigate(["/login"]);
  }
}

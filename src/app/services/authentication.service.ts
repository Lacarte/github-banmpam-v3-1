import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable, BehaviorSubject, of } from "rxjs";
import { first } from "rxjs/operators";
import { AngularFireFunctions } from "@angular/fire/functions";
import { UIService } from "../shared/ui.service";
import { Router } from "@angular/router";
import { Login } from "../shared/interfaces/login";
import { User } from "../shared/interfaces/user";
import { auth } from "firebase/app";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { switchMap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private cloudFunctions: AngularFireFunctions,
    private uiService: UIService,
    private router: Router
  ) {
    // Get the auth state, then fetch the Firestore user document or return null
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        console.log("before user ", user);
        if (user) {
          console.log("after user ", user);
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    );

    afAuth.onAuthStateChanged(function(user) {
      //  console.log("before user ", user);
      if (user) {
        //  console.log("after ruser ", user);
        // user.getIdTokenResult().then(idTokenResult => {
        //   console.log("idTokenResult => ", idTokenResult);
        //   console.log("Claims admin => ", idTokenResult.claims.admin);
        // });
      } else {
        // No user is signed in.
        //  console.log("No user is signed in", user);
      }
    });

    this.afAuth.authState.subscribe(auth => {
      // console.log("authState", auth);
    });
  }

  //  public get currentUserValue(): User {
  //     return this.currentUserSubject.value;
  //   }

  /* Sign up */
  signUp(email: string, password: string) {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log("Successfully signed up!", res);
      })
      .catch(error => {
        console.log("Something is wrong:", error.message);
      });
  }

  /* Sign in */
  signIn(login: Login) {
    console.log("signin");
    this.afAuth
      .signInWithEmailAndPassword(login.email, login.password)
      .then(res => {
        console.log(" res=> ", res);
        console.log("Successfully signed in!");

        //const user = new User(decodedJwtData.sub, res, decodedJwtData.role, decodedJwtData.permissions);

        // this.currentUserSubject.next(user);
        //sessionStorage.setItem('currentUser', JSON.stringify(user));

        this.router.navigate(["/"]);
      })
      .catch(err => {
        console.log("Something is wrong:", err.message);
      });
  }

  getUserProfile() {
    // var user = this.afAuth.currentUser;
    var user = this.afAuth.authState.pipe(first()).toPromise();
    // var user2 = this.authenticated ? this.authState : null;
    //console.log("USER2 => ", user2);

    if (user != null) {
      console.log("USER => ", user);
      console.log(user);
    } else {
      console.log("USER => is Loggedout");
    }
  }

  updateUserProfile() {
    this.afAuth.currentUser.then(user => {
      if (user != null) {
        user
          .updateProfile({
            displayName: "Jane Q. User",
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          })
          .then(function() {
            // Update successful.
            console.log("USER UPDATED Successfully => ", user);
          })
          .catch(function(error) {
            // An error happened.
          });
        console.log("USER => ", user);
      } else {
        console.log("USER => is Loggedout");
      }
    });
  }

  convertToAdmin(emailAdmin: string) {
    const callable = this.cloudFunctions.httpsCallable("addAdminRole");
    callable({ email: emailAdmin }).subscribe(response => {
      console.log(response);
      // to get user claim
    });
  }

  getProfileData() {
    this.afAuth.currentUser.then(user => {
      if (user != null) {
        console.log("USER = ", user);
      } else {
        alert("There is not authenticated user!");
      }
    });
  }

  updateEmailProfile() {
    this.afAuth.currentUser.then(user => {
      if (user != null) {
        user
          .updateEmail("ing.lacarte@gmail.com")
          .then(function() {
            // Update successful.
            console.log("email updated test@updated.com", user);
          })
          .catch(function(error) {
            // An error happened.
            console.log("could not updated email : test@updated.com", error);
          });
      } else {
        console.log("USER => is Logged out");
      }
    });
  }

  verifyUser() {
    this.afAuth.currentUser.then(user => {
      if (user != null) {
        user
          .sendEmailVerification()
          .then(function() {
            alert("Email sent!");
          })
          .catch(function(error) {
            // An error happened.
            console.log("Email not sent!", error);
          });
      } else {
        console.log("USER => is Logged out");
      }
    });
  }

  deleteUser() {
    this.afAuth.currentUser.then(user => {
      if (user != null) {
        user
          .delete()
          .then(function() {
            alert("User deleted!");
          })
          .catch(function(error) {
            alert("User not deleted!");
          });
      } else {
        console.log("USER => is Logged out");
      }
    });
  }

  resetPassword() {
    this.afAuth.currentUser.then(user => {
      if (user != null) {
        this.afAuth
          .sendPasswordResetEmail(user.email)
          .then(function() {
            alert("Send Password Reset Email sent!");
          })
          .catch(function(error) {
            alert("User not deleted!");
          });
      } else {
        console.log("USER => is Logged out");
      }
    });
  }

  /* Sign out */
  logout() {
    this.afAuth
      .signOut()
      .then(function() {
        //alert("User signed out!");
        sessionStorage.removeItem("currentUser");
        this.currentUserSubject.next(null);

        this.uiService.isOpen = false;
        this.router.navigate(["/login"]);
      })
      .catch(function(error) {
        // alert("Something went wrong!");
        //console.log("Something went wrong!");
      });
  }
}

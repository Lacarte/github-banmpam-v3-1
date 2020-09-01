import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { first } from "rxjs/operators";
import { AngularFireFunctions } from "@angular/fire/functions";
import { UIService } from "../shared/ui.service";
import { Router } from "@angular/router";
import { Login } from "../shared/interfaces/login";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  userData: Observable<firebase.User>;


  
  constructor(
    private afAuth: AngularFireAuth,
    private cloudFunctions: AngularFireFunctions,
     private uiService: UIService,
    private router: Router
  ) {
    this.userData = afAuth.authState;
    //check when the user logout or login

    //to monitor user state
    afAuth.onAuthStateChanged(function(user) {

      if (user) {
        // User is signed in.
        //  console.log("User signed in", user);
        //user.getIdToken().then(function(data) {
          //console.log("data => ", data);
        //});
      
                console.log("user => ", data);

        user.getIdTokenResult().then(idTokenResult => {
          console.log("idTokenResult => ", idTokenResult);
          console.log("Claims admin => ", idTokenResult.claims.admin);
        });



      } else {
        // No user is signed in.
        // console.log("No user is signed in", user);
      }
    });
  }

  

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
        console.log("Successfully signed in!");

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
         
         this.uiService.isOpen = false;
         this.router.navigate(["/login"]);
      
      })
      .catch(function(error) {
        // alert("Something went wrong!");
        console.log("Something went wrong!");
      });
  }
}

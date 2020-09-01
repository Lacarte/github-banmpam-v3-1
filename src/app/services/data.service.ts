import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Login } from "../shared/interfaces/login";

@Injectable()
export class DataService {
  environment: any;

  constructor(private http: HttpClient) {
    this.environment = environment;
  }

 getLoginForm(login: Login): Observable<any> {
    console.log(login);
    console.log(this.environment);
    return this.http.post(this.environment.apiUrl, login);
  }
}


// https://putsreq.com/8ZuaARTd6xzYBvRjnUh7/inspect
// var parseBody =  JSON.parse(body.request)

// response.body = parseBody;
// response.status = 200; // def
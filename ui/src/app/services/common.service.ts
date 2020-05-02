import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { COUNTRIES_URL, LOGIN_URL, SIGIN_UP_URL} from "../utils/env.constants";

@Injectable()
export class CommonService {

  constructor(private http: HttpClient) {}

  getCountryList() {
    return this.http.get(COUNTRIES_URL);
  }

  doLogin(userDetails) {
    let payload = { email: userDetails.email, password: userDetails.password };
    return this.http.post(LOGIN_URL, payload);
  }

  doRegister(userDetails) {
    console.log(userDetails);
    return this.http.post(SIGIN_UP_URL, userDetails);
  }
}

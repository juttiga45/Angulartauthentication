import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonService } from "../services/common.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userInputDetails: any = { email: "", password: "" };
  angForm: FormGroup;
  constructor(
    private router: Router,
    private commonSerivce: CommonService,
    private fb: FormBuilder
  ) {
    this.createForm();
    {
      this.angForm = this.fb.group({
        name: ["", Validators.required],
        password: ["", Validators.required]
      });
    }
  }

  ngOnInit() {}

  doLogin() {
    let udetails = JSON.stringify(this.userInputDetails);
    localStorage.setItem("userDetails", udetails);
    console.log("udetails ==>", this.userInputDetails);

    console.log("dologin");
    this.commonSerivce.doLogin(this.userInputDetails).subscribe(res => {
      if (res) {
        sessionStorage.setItem("isUserLoggedIn", "true");
        this.router.navigate(["../contentpage"]);
      }
    });
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
}

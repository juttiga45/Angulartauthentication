import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonService } from "../services/common.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  angForm: FormGroup;
  constructor(
    private router: Router,
    private commonSerivce: CommonService,
    private fb: FormBuilder
  ) {
    {
      this.angForm = this.fb.group({
        name: ["", Validators.required],
        email: ["", Validators.required],
        password: ["", Validators.required],
        mobile: ["", Validators.required]
      });
    }
  }

  userInputDetails: any = {
    username: "",
    password: "",
    email: "",
    mobile: ""
  };

  ngOnInit() {}

  register() {
    this.commonSerivce.doRegister(this.userInputDetails).subscribe(res => {
      this.router.navigate(["/contentpage"]);
    });
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      mobile: ["", Validators.required]
    });
  }
}

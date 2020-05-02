import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  appTitle: string = "";
  firstLetter: string = "";
  unreadMessagesCount: number = 0;

  @Input()
  showSetting: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    console.log("showSetting --->", this.showSetting);
  }
  doLogout() {
    console.log("logout");
    localStorage.removeItem("userDetails");
    this.router.navigate(["../loginpage"]);
  }
}

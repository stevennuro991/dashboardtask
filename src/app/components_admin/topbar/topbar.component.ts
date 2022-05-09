import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const admin: RouteInfo[] = [
  {
    path: "",
    title: "Dashboard",
    
    icon: "ikon ikon-user",
    class: ""
  },
  {
    path: "/deliveries",
    title: "Deliveries",
    icon: "ikon ikon-exchange",
    class: ""
  },
  {
    path: "/users",
    title: "Users",
    icon: "ikon ikon-user",
    class: ""
  },
  {
    path: "/settings",
    title: "Settings",
    icon: "ikon ikon-settings",
    class: ""
  },

]




@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.css"]
})
export class TopbarComponent implements OnInit {
  menuItems: any[]
  isCollapsed: boolean = true;
  constructor() {}

  ngOnInit() {
    this.menuItems = admin;
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}

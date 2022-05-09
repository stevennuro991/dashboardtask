import { Routes } from "@angular/router";
import { DeliveriesComponent } from "src/app/pages/admin/deliveries/deliveries.component";
import { UsersComponent } from "src/app/pages/admin/users/users.component";
import { DashboardComponent } from '../../pages/admin/dashboard/dashboard.component';
import { SettingsComponent } from '../../pages/admin/settings/settings.component';



// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "", component: DashboardComponent  },
  { path: "deliveries", component: DeliveriesComponent },
  { path: "users", component: UsersComponent  },
  { path: "settings", component: SettingsComponent  },
  
 // { path: "rtl", component: RtlComponent }
];

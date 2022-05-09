import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from '../../pages/admin/dashboard/dashboard.component';
import { SettingsComponent } from '../../pages/admin/settings/settings.component';
import { UsersComponent } from "src/app/pages/admin/users/users.component";
import { DeliveriesComponent } from "src/app/pages/admin/deliveries/deliveries.component";

// import { RtlComponent } from "../../pages/rtl/rtl.component";



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    DashboardComponent,
    UsersComponent,
    SettingsComponent,
    DeliveriesComponent
  

  ]
})
export class AdminLayoutModule {}

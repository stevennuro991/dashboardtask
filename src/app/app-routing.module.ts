import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component"
const routes: Routes = [
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren:()=>import('./layouts/admin-layout/admin-layout.module').then(m=>m.AdminLayoutModule)
      }
    ]
  },
  
  {
    path: "dashboard",
    redirectTo: "dashboard"
  },
  // 
  //  {
  //   path: "",
  //   component: AuthorizerLayoutComponent,
  //   children: [
  //     {
  //       path: "",
  //       loadChildren:()=>import('./layouts/authorizer-layout/authorizer-layout.module').then(m=>m.AuthorizerLayoutModule)
  //     }
  //   ]
  // }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

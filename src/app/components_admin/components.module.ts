import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FooterComponent } from "./footer/footer.component";
import { TopbarComponent } from "./topbar/topbar.component";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [FooterComponent,TopbarComponent],
  exports: [FooterComponent,  TopbarComponent]
})
export class ComponentsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header.component";
import { NavigationModule } from "../navigation/navigation.module";
import { RouterModule } from "@angular/router";
import { CartModule } from "../cart/cart.module";



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    NavigationModule,
    RouterModule,
    CartModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule { }

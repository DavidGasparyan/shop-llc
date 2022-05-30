import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { NavButtonDirective } from "../directives/nav-button.directive";


@NgModule({
  declarations: [
    NavigationComponent,
    NavButtonDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavigationComponent,
  ],
})
export class NavigationModule { }

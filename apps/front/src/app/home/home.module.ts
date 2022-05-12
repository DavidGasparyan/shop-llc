import { NgModule } from '@angular/core';
import { NavigationModule } from '../navigation/navigation.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    NavigationModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }

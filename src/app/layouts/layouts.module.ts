import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import { LayoutsComponent } from './layouts.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TopbarComponent, 
    LayoutsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class LayoutsModule { }

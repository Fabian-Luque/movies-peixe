import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LayoutsComponent } from './layouts/layouts.component';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [
  { path: '',  component: LayoutsComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule     
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

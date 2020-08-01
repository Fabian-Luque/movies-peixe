import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CardMovieComponent } from './card-movie/card-movie.component';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [CardMovieComponent, PaginationComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports:[
    CardMovieComponent,
    PaginationComponent
  ]
})
export class SharedModule { }

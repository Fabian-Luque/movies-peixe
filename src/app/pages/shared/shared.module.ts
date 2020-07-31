import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CardMovieComponent } from './card-movie/card-movie.component';
import { PaginationComponent } from './pagination/pagination.component';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [CardMovieComponent, PaginationComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    NgxPaginationModule
  ],
  exports:[
    CardMovieComponent,
    PaginationComponent
  ]
})
export class SharedModule { }

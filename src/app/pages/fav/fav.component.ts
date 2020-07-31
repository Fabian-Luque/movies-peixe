import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  favs : any;
  constructor() { }

  ngOnInit(): void {
    this.favs = JSON.parse(localStorage.getItem('favs'));
  }
}

import { Component, Input, Output } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent {
  @Input() fav : boolean;
  @Input() movie : any;
  @Output() delete = new EventEmitter();
  faHeart = faHeart;
  constructor() { }


  addFav(status) {
    this.fav =! this.fav;
    if (this.fav) {
      // Agrega al local storage
      this.addToLocalStorage(this.movie);
    } else {
      // Elimina del local storage
      this.deleteToLocalStorage(this.movie);
    }

  }

  addToLocalStorage(movie) {
    let favs = JSON.parse(localStorage.getItem('favs'));
    let found = favs.find((m) => m.imdbID === movie.imdbID );
    if (found) {
      return;
    }
    favs = favs ? [...favs, movie] : favs = [movie];
    localStorage.setItem('favs', JSON.stringify(favs));
    console.log(favs);
    
  }
  deleteToLocalStorage(movie) {
    let favs = JSON.parse(localStorage.getItem('favs'));
    if (favs.length) {
      let removeIndex = favs.map((m) => m.imdbID).indexOf(movie.imdbID);
      favs.splice(removeIndex, 1);
    } 
    localStorage.setItem('favs', JSON.stringify(favs));
    this.delete.emit(movie);
  }

}

import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit{
  cartList ! : Array<any> ;
  likedSet : Set<number> = new Set();
  displayedColumns: string[] = ['position', 'credit', 'name', 'place', 'like'];
  removeFromFav(id : number) {
    let existingList = JSON.parse( window.localStorage.getItem("liked") || "[]" );   
    let existingCart = JSON.parse(window.localStorage.getItem('cart') || '[]') ;
    existingList = new Set([...existingList]) ;
    existingList.delete(id);
    existingCart = existingCart.filter((item : any)=>item.id != id) ;
    window.localStorage.setItem("cart", JSON.stringify(Array.from(existingCart)));
    window.localStorage.setItem( "liked" , JSON.stringify( Array.from(existingList))); 
    this.likedSet = existingList ;
    this.cartList = existingCart ;
  }
  ngOnInit(): void {
    this.cartList = JSON.parse(window.localStorage.getItem("cart") || '[]') ;
  }
} 

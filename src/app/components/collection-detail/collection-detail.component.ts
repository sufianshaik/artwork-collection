
import { Component, Input, OnInit } from '@angular/core';
import { ServiceFavService } from 'src/shared/Services/service-fav.service';

@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.css']
})
export class CollectionDetailComponent implements OnInit {
  @Input() artDetail! : any ;
  @Input() index! : number ;
  constructor(private _serviceFav : ServiceFavService){}
  likedBoolean : boolean = false ;
  likedSet : Set<number> = new Set();
  addToFav(id : number){
    let existingList = JSON.parse( window.localStorage.getItem("liked") || "[]" );   
    let existingCart = JSON.parse(window.localStorage.getItem('cart') || '[]') ;
    existingList = new Set([...existingList]) ;
    if (!this.likedSet.has(id)){
      existingCart.push(this.artDetail);
    }
    existingList.add(id);
    window.localStorage.setItem("cart", JSON.stringify(Array.from(existingCart)));
    window.localStorage.setItem( "liked" , JSON.stringify( Array.from(existingList))); 
    this.likedSet = existingList;
  }
  removeFromFav(id : number) {
    let existingList = JSON.parse( window.localStorage.getItem("liked") || "[]" );   
    let existingCart = JSON.parse(window.localStorage.getItem('cart') || '[]') ;
    existingList = new Set([...existingList]) ;
    existingList.delete(id);
    existingCart = existingCart.filter((item : any)=>item.id != id) ;
    
    window.localStorage.setItem("cart", JSON.stringify(Array.from(existingCart)));
    window.localStorage.setItem( "liked" , JSON.stringify( Array.from(existingList))); 
    this.likedSet = existingList ;
  }

  ngOnInit(): void {
    let existingList = JSON.parse( window.localStorage.getItem("liked") || "[]" );   
    existingList = new Set([...existingList]) ;
    this.likedSet = existingList ;
  }
}

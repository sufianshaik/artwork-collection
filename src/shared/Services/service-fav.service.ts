import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceFavService {

  private _likedSet : Set<number> = new Set();
  getAllLikedSet(){
    return this._likedSet ;
  }

  addToLikedSet(id : number){
    this._likedSet.add(id) ;
  }
  removeFromLikedSet(id : number){
    this._likedSet.delete(id);
  }

  

  constructor() { }
}

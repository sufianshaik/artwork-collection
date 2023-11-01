import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {
  constructor(private __http : HttpClient) { }

  url : string = "https://api.artic.edu/api/v1/artworks?page=";
  urlById : string = "https://api.artic.edu/api/v1/artworks/" ;
  urlSearch : string = "https://api.artic.edu/api/v1/artworks/search?q=" ;


  getAllCollection(pageNumber : number, limit : number) : Observable <any> {
    return this.__http.get<any>(this.url + pageNumber + "&limit="+ limit + "&fields=id,image_id,artwork_type_title,title,description,publication_history,exhibition_history,medium_display,artwork_type_title,credit_line,place_of_origin,artist_title").pipe(
      catchError(this.handleError) 
    );
  }

  getCollectionById(id : any) {
    return this.__http.get<any>(this.urlById + id).pipe(
      catchError(this.handleError) 
    );
  }

  getCollectionByFilter(query : string ) {
    return this.__http.get<any>(this.urlSearch + query + "&fields=id,image_id,title,artwork_type_title,description,publication_history,exhibition_history,medium_display,artwork_type_title").pipe(
      catchError(this.handleError) 
    )
  }

  private handleError(err : HttpErrorResponse){
    let errorMessage = "" ;
    if (err.error instanceof ErrorEvent) {
        errorMessage = `An error occured ${err.error.message}` ;
    } else {
        errorMessage = `Server returned code : ${err.status}, error message is : ${err.message}` ;
    }
    console.log(errorMessage);
    return throwError(()=>errorMessage) ;
}


}

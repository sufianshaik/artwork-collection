import { Component, OnInit  } from '@angular/core';
import { ServiceApiService } from 'src/shared/Services/service-api.service';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import { ServiceFavService } from 'src/shared/Services/service-fav.service';

@Component({
  selector: 'app-display-home',
  templateUrl: './display-home.component.html',
  styleUrls: ['./display-home.component.css']
})
export class DisplayHomeComponent implements OnInit {
  title = 'artwork-collection';
  artCollectionList! : Array<any>;
  errorMessage : string = "" ;
  filterBy : string = "" ;
  perPage! : number ;
  totalPages : number = 123203 ;
  limits : any[] = [
    {value: 5 , viewValue: 5 },
    {value: 10, viewValue: 10 },
    {value: 25, viewValue: 25},
  ];
  currentPageNumber : number = 0 ;
  showLoader = true ;
  searchForm ! : FormGroup ;
  constructor(private _serviceApi : ServiceApiService, private _serviceFav : ServiceFavService, private _fb : FormBuilder){}

  changeLimit(event :any){
    console.log(event);
    this.perPage = event; 
    this.getCollectionByPageLimit(this.currentPageNumber , event) ;
  }

  getCollectionByPageLimit(pageNumber : number , limit : number ){
    this._serviceApi.getAllCollection(pageNumber , limit).subscribe({
      next : item => {
        this.artCollectionList = item.data ;
        this.perPage = item.pagination.limit;
        this.currentPageNumber = item.pagination.current_page ;
        this.totalPages = item.pagination.total ;
        this.showLoader = false ;
      },
      error : err => this.errorMessage = err ,
    })  
  }

  getCollectionBySearch(query : string){
    this._serviceApi.getCollectionByFilter(query).subscribe({
      next : item => {
        console.log(item.data);
        this.artCollectionList = item.data ;
        this.perPage = item.pagination.limit;
        this.currentPageNumber = item.pagination.current_page ;
        this.totalPages = item.pagination.total ;
        this.showLoader = false ;
      },
      error : err => this.errorMessage = err ,
    })
  }


  onPageChange(pageNumber : number){
    this.currentPageNumber = pageNumber ;
    this.getCollectionByPageLimit(this.currentPageNumber , this.perPage) ;
  }



  ngOnInit(): void {
    this._serviceApi.getAllCollection(0,12).subscribe({
      next : item => {
        this.artCollectionList = item.data ;
        this.perPage = item.pagination.limit;
        this.currentPageNumber = item.pagination.current_page ;
        this.totalPages = item.pagination.total;
        this.showLoader = false ;
      },
      error : err => this.errorMessage = err ,
    });
    this.searchForm = this._fb.group({
      filter : "",
    })

    this.searchForm.valueChanges.subscribe((value) => {
        this.filterBy = value.filter ;
        this.getCollectionBySearch(value.filter) ;
    });

  }

}

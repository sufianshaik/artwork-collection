import { FlatTreeControl } from '@angular/cdk/tree';
import { Component , OnInit} from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceApiService } from 'src/shared/Services/service-api.service';
import { ServiceFavService } from 'src/shared/Services/service-fav.service';

@Component({
  selector: 'app-single-collection-render',
  templateUrl: './single-collection-render.component.html',
  styleUrls: ['./single-collection-render.component.css']
})
export class SingleCollectionRenderComponent implements OnInit{
  id! : string | null ;
  collectionDetail !: any ;
  liked : boolean = false ;
  constructor(private _route : ActivatedRoute, private _serviceApi : ServiceApiService, private _servieFav : ServiceFavService){} 

  ngOnInit(): void {
    this._route.paramMap.subscribe((params : ParamMap) => {
      this.id = params.get('id') ;
    })
    this._serviceApi.getCollectionById(this.id).subscribe({
      next : item => {
        this.collectionDetail= item.data ;
      },
      error : err => console.warn(err),
    });
  }
}

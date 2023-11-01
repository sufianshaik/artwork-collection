import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from 'src/shared/Services/service-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'artwork-collection';
  constructor(private _serviceApi : ServiceApiService){}
  ngOnInit(): void {
  }

}

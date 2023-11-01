import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from 'src/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CollectionDetailComponent } from './components/collection-detail/collection-detail.component';
import { DisplayHomeComponent } from './components/display-home/display-home.component';
import { SingleCollectionRenderComponent } from './components/single-collection-render/single-collection-render.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CollectionDetailComponent,
    DisplayHomeComponent,
    SingleCollectionRenderComponent,
    FavouritesComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgbModule,
    NgxPaginationModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

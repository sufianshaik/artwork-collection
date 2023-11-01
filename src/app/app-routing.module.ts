import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayHomeComponent } from './components/display-home/display-home.component';
import { SingleCollectionRenderComponent } from './components/single-collection-render/single-collection-render.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  {
    path : 'art-collection',
    component : DisplayHomeComponent,
  },
  {
    path : 'art-collection/:id',
    component : SingleCollectionRenderComponent
  },
  {
    path : 'home',
    component : LandingPageComponent
  },
  {
    path : 'liked',
    component : FavouritesComponent
  },
  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
  },
  {
    path : "**",
    redirectTo : "home",
    pathMatch : 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

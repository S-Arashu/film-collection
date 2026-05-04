import { Routes } from '@angular/router';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmDetailComponent } from './components/film-detail/film-detail.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: FilmListComponent,
  },
  {
    path: 'film/:id',
    component: FilmDetailComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

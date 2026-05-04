import { Component, inject, signal, computed } from '@angular/core';
import { FilmCardComponent } from '../film-card/film-card.component';
import { FilmsService } from '../../services/films.service';
import { AutofocusDirective } from '../../directives/autofocus.directive';

@Component({
  selector: 'app-film-list',
  standalone: true,
  imports: [FilmCardComponent, AutofocusDirective],
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.scss',
})
export class FilmListComponent {
  private filmsService = inject(FilmsService);

  searchQuery = signal('');

  filteredFilms = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    if (!query) return this.filmsService.films();
    return this.filmsService
      .films()
      .filter(
        (f) =>
          f.title.toLowerCase().includes(query) ||
          f.genre.toLowerCase().includes(query),
      );
  });

  onFavoriteToggle(id: number): void {
    this.filmsService.toggleFavorite(id);
  }
}

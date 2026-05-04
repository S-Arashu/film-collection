import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Film } from '../../models/film.model';
import { DurationPipe } from '../../pipes/duration.pipe';

@Component({
  selector: 'app-film-card',
  standalone: true,
  imports: [RouterLink, DurationPipe],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss',
})
export class FilmCardComponent {
  film = input.required<Film>();

  favoriteToggled = output<number>();

  onFavoriteClick(event: MouseEvent): void {
    event.stopPropagation();
    this.favoriteToggled.emit(this.film().id);
  }
}

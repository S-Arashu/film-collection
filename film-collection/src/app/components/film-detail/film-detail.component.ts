import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { FilmsService } from '../../services/films.service';
import { DurationPipe } from '../../pipes/duration.pipe';

@Component({
  selector: 'app-film-detail',
  standalone: true,
  imports: [DurationPipe, RouterLink],
  templateUrl: './film-detail.component.html',
  styleUrl: './film-detail.component.scss',
})
export class FilmDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private filmsService = inject(FilmsService);

  private filmId = toSignal(
    this.route.paramMap.pipe(map((params) => +params.get('id')!)),
  );

  film = computed(() => this.filmsService.getById(this.filmId()!));

  goBack(): void {
    this.router.navigate(['/']);
  }

  toggleFavorite(): void {
    const id = this.filmId();
    if (id) this.filmsService.toggleFavorite(id);
  }
}

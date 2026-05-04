import { Component, inject, computed } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs/operators';

interface Crumb {
  label: string;
  link: string | null;
}

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
})
export class BreadcrumbsComponent {
  private router = inject(Router);

  private currentUrl = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map((e) => (e as NavigationEnd).urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  crumbs = computed((): Crumb[] => {
    const url = this.currentUrl();

    if (url.startsWith('/film/'))
      return [
        { label: 'Главная', link: '/' },
        { label: 'Фильм', link: null },
      ];

    if (url === '/about')
      return [
        { label: 'Главная', link: '/' },
        { label: 'О нас', link: null },
      ];

    return [{ label: 'Главная', link: null }];
  });
}

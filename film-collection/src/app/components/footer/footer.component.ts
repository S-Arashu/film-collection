import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="app-footer">
      <p>FilmCollection © 2025 — учебный проект RS School</p>
    </footer>
  `,
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}

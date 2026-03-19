import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

const importedModules = [CommonModule, RouterLink, RouterLinkActive, RouterOutlet];
@Component({
  standalone: true,
  selector: 'app-root',
  imports: importedModules,
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('modern-angular');
}

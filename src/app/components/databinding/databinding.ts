import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-databinding',
  imports: [CommonModule, FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.scss',
})
export class Databinding {
  name = 'Angular';
  lastClicked = 'never';

  onClick() {
    this.lastClicked = new Date().toLocaleTimeString();
  }
}

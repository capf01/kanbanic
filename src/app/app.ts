import { Component } from '@angular/core';
import { Kanban } from './kanban/kanban';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Kanban],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
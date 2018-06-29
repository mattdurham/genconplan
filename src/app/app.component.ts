import { Component } from '@angular/core';
import { AlleventsService } from './services/allevents.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AlleventsService]
})
export class AppComponent {
  title = 'app';
  constructor(private eventService: AlleventsService) {}
}

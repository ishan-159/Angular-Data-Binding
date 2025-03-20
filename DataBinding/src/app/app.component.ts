import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DataBinding';
  message: string;

  constructor() {
    this.message = 'Hello from BridgeLabz';
  }
}

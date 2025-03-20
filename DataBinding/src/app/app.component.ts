import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DataBinding';
  message: string;
  logoUrl = 'https://gumlet.assettype.com/freepressjournal%2F2021-06%2F32af7f9f-b603-4e12-8340-ba2425bb5ee8%2FBridgeLabz.PNG';

  constructor() {
    this.message = 'Hello from BridgeLabz';
  }
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyWidget } from "./my-widget/my-widget";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyWidget],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-demo');
  messageForSecond = 'Message from AppComponent to second, via first';
}

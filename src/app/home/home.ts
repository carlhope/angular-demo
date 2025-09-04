import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyWidget } from '../my-widget/my-widget';

@Component({
  selector: 'app-home',
  imports: [RouterModule, MyWidget],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  messageForSecond = 'Message from AppComponent to second, via first';

}

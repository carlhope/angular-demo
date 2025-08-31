import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.html',
  styleUrl: './second.css'
})
export class Second {
  @Input() message!: string;
  @Input() messageFromApp!:String;


}

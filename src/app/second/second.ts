import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.html',
  styleUrl: './second.css'
})
export class Second {
  @Input() message!: string;
  @Input() messageFromApp!:String;
  @Output() reply = new EventEmitter<string>();

  sendReply(): void {
    const response = `Reply from SecondComponent at ${new Date().toLocaleTimeString()}`;
    this.reply.emit(response);
  }


}

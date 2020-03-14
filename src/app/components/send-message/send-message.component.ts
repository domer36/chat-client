import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent {
  message = '';
  constructor(private chat:ChatService) { }

  SendMessage() {
    this.chat.SendMessage( this.message )
    this.message = ''
  }
}

import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent {
  message = '';
  message_error = false

  constructor(private Chat:ChatService) { }

  SendMessage() {
    if( this.message.length ){
      this.Chat.SendMessage( this.message )
      this.message = ''
      this.message_error = false
    }else{
      this.message_error = true
    }
  }
}

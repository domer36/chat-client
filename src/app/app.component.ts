import { Component } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'client';
  constructor(private Chat:ChatService){
    this.Chat.GetName()
    this.Chat.GetMessages()
  }
}

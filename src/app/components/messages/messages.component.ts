import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent implements OnInit {
  messages = []
  constructor(public Chat:ChatService) { }

  ngOnInit() {
    this.Chat.GetMessages().subscribe( message => this.messages.push(message))  
  }

}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  
  // Here keep all message sent and received
  messages = []

  // Reference to box element of the all message
  @ViewChild('message_container', {static: true}) mc: ElementRef;
  
  // Instance of Chat Service
  constructor(public Chat:ChatService) { }

  ngOnInit() {

    // Listen the socket emit for new messages and keep it in the array
    this.Chat.GetMessages().subscribe( message => {
      this.messages.push(message)
      this.mc.nativeElement.scrollTop = this.mc.nativeElement.scrollHeight
    })  
  }

}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages = []

  @ViewChild('message_container', {static: true}) mc: ElementRef;
  
  constructor(public Chat:ChatService, private elementRef: ElementRef) { }

  ngOnInit() {
    this.Chat.GetMessages().subscribe( message => {
      this.messages.push(message)
      this.mc.nativeElement.scrollTop = this.mc.nativeElement.scrollHeight
    })  
  }

}

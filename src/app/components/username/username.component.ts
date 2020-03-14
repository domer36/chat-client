import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {
  editable=false
  newusername= ''
  constructor(public Chat:ChatService) { }

  ngOnInit() {
    this.newusername = this.Chat.username
  }

  ChangeUsername(){
    this.editable = false
    this.Chat.ChangeUsername(this.newusername)
  }
}

import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.sass']
})
export class UsernameComponent implements OnInit {

  constructor(public Chat:ChatService) { }

  ngOnInit() {
  }

}
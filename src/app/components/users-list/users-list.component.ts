import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../chat.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users = []
  constructor(public Chat:ChatService) { }

  ngOnInit() {
    this.Chat.GetUsers().subscribe( users => {
      // Keep all users connected
      this.users = users

      // When a new user is connected, updated the TotalUsers using the REST API
      this.Chat.GetTotalUsers()
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-total-users',
  templateUrl: './total-users.component.html',
  styleUrls: ['./total-users.component.scss']
})
export class TotalUsersComponent implements OnInit {

  constructor(public Chat:ChatService) { }

  ngOnInit() {
  }

}

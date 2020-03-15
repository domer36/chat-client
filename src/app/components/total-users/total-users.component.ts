import { Component } from '@angular/core';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-total-users',
  templateUrl: './total-users.component.html',
  styleUrls: ['./total-users.component.scss']
})
export class TotalUsersComponent {
  // Instance Chat Service to get all the users conncted.
  constructor(public Chat:ChatService) { }
}

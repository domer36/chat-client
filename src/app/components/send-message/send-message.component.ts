import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.sass']
})
export class SendMessageComponent implements OnInit {
  message = 'hola';
  constructor() { }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import * as io from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public username = ''
  public messages = []
  private server = 'http://localhost:3000/'
  private socket

  constructor() { 
    this.socket = io(this.server)
  }

  Connect(usr) {

  }

  GetName() {
    this.username = `annon${Math.floor(Math.random() * 9999)}`
  }

  SendMessage( message ) {
    this.socket.emit('message', {username: this.username, message})
  }

  GetMessages() {
    Observable.create((observer) => {
      this.socket.on('message', (message) => {
          observer.next(message)
      })
  }).subscribe( message => this.messages.push(message))
  }
}

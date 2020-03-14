import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import * as io from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public username = ''
  private server = 'http://localhost:3000/'
  private socket

  constructor() { 
    this.socket = io(this.server)
  }

  Connect() {
    this.GetName()
    this.socket.emit('add_user', this.username)
  }

  GetName() {
    this.username = `annon${Math.floor(Math.random() * 9999)}`
  }

  SendMessage( message ) {
    this.socket.emit('message', {username: this.username, message})
  }

  GetMessages() {
    return Observable.create((observer) => {
      this.socket.on('message', (message) => {
          observer.next(message)
      })
  })
  }

  GetUsers() {
    return Observable.create( 
      observer => this.socket.on('users', 
        users_list => observer.next(users_list)))
  }
}

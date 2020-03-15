import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { environment } from './../environments/environment'
import * as io from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public username = ''
  public total_users = 0
  public socket_id = null
  private server = environment.SERVER_CHAT
  private socket

  constructor(private http:HttpClient) { 
    this.socket = io(this.server)
    this.socket.on('connect', socket_id => this.socket_id = this.socket.id)
  }

  Connect() {
    // Init the connection
    this.GetName()
    this.socket.emit('add_user', this.username)
  }

  // Create our username random
  GetName() { this.username = `annon${Math.floor(Math.random() * 9999)}` }

  // Send our username and message to the chat
  SendMessage( message ) { this.socket.emit('message', {username: this.username, message}) }

  // Wait for new messages
  GetMessages() {
    return Observable.create((observer) => {
      this.socket.on('message', (message) => {
          observer.next(message)
      })
  })
  }

  // Get all users connected
  GetUsers() {
    return Observable.create( 
      observer => this.socket.on('users', 
        users_list => observer.next(users_list)))
  }

  // Consulting the total users actived using the RESP API
  GetTotalUsers(){
    this.http.get(`${this.server}/getTotalUsers`)
      .subscribe( (res:any) => this.total_users = res.total)
  }

  ChangeUsername( new_username ){
    this.socket.emit('change_username', {id: this.socket_id, username: new_username})
    this.username = new_username
  }
}

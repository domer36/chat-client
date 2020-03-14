import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SendMessageComponent } from './components/send-message/send-message.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatIconModule } from '@angular/material';
import { MessagesComponent } from './components/messages/messages.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsernameComponent } from './components/username/username.component';
import { TotalUsersComponent } from './components/total-users/total-users.component';

@NgModule({
  declarations: [
    AppComponent,
    SendMessageComponent,
    MessagesComponent,
    UsersListComponent,
    UsernameComponent,
    TotalUsersComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

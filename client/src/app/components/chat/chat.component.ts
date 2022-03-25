import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  messages: any[] = [];
  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    // 
    this.chatService.getMessages().subscribe((data) => {
      this.messages.push(data);
    });
  }

  // this functoin will send Message to DB first and then emit the socket to update all live screens
  sendMessage(event: any): void {
    let userName: string, userId: string, localStorageData;
    localStorageData = localStorage.getItem('user');
    if (localStorageData) {
      userId = JSON.parse(localStorageData).userId;
      userName = JSON.parse(localStorageData).userName;
      let data: Message = {
        senderId: userId,
        messageContent: event.message,
      };

      this.chatService.sendMessage(data).subscribe((dt) => {
        let socketData: Message = {
          text: event.message,
          userName: userName,
        };
        this.chatService.sendMessageOnSocket(socketData);
        this.messages.push(socketData);
      });
    }
  }
}

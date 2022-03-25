import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: any[] = []
  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.getMessages().subscribe((data)=>{
      this.messages.push(data)
    })
  }
  sendMessage(event:any): void{
    let userName: any, userId, localStorageData;
    localStorageData = localStorage.getItem("user")
    if(localStorageData){
      userId = JSON.parse(localStorageData).userId
      userName = JSON.parse(localStorageData).userName
      let data = {
        senderId: userId,
        messageContent: event.message
    } 

      this.chatService.sendMessage(data).subscribe((dt)=>{
        let socketData = {
          text: event.message,
          userName: userName
        }
        this.chatService.sendMessageOnSocket(socketData)
        this.messages.push(socketData)
      })
    }
    
  }
}

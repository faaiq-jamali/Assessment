import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nameInput:string = "" ;
  errorMessage: any = "";
  constructor(private chatService: ChatService, private router: Router) { }

  ngOnInit(): void {
  }
  submitForm(): void {
    this.chatService.register(this.nameInput).subscribe((result: any)=>{
      if(result.data){
        this.errorMessage = ""
      
      // console.log(result.data.name, typeof result)
      let userData = {userId: result.data._id, userName:result.data.name}
      localStorage.setItem("user", JSON.stringify(userData))
      this.router.navigateByUrl('/chat')
      }
      else{
        this.errorMessage = result.message
      }
    })
  }

  isButtonDisabled(): boolean{
    return this.nameInput===""
  }
}

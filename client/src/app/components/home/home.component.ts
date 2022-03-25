import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  nameInput: string = '';
  errorMessage: string = '';
  constructor(private chatService: ChatService, private router: Router) {}

  ngOnInit(): void {}

  // This function will submit the name to the backend, if successully added, will redirect the user to chat window
  submitForm(): void {
    this.chatService.register(this.nameInput).subscribe((result: any) => {
      if (result.data) {
        this.errorMessage = '';

        let userData = { userId: result.data._id, userName: result.data.name };
        localStorage.setItem('user', JSON.stringify(userData));
        this.router.navigateByUrl('/chat');
      } else {
        this.errorMessage = result.message;
      }
    });
  }

  // button willl be disabled if input field is empty
  isButtonDisabled(): boolean {
    return this.nameInput === '';
  }
}

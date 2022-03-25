import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private readonly api: string = 'http://52.15.194.62:5000/api';
  constructor(private http: HttpClient, private socket: Socket) {}

  register(name: string): Observable<Object> {
    return this.http.post(this.api + '/user', { name });
  }

  sendMessage(data: Message): Observable<Object> {
    return this.http.post(this.api + '/message', data);
  }

  sendMessageOnSocket(data: Message): void {
    this.socket.emit('New Message', data);
  }
  getMessages(): Observable<Object> {
    return this.socket.fromEvent('New Message').pipe(map((data: any) => data));
  }
}

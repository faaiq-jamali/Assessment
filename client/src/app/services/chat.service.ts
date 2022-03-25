import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private readonly api:string  = "http://localhost:5000/api"
  constructor(private http: HttpClient, private socket: Socket) {
   }

   register(name: string):Observable<Object>{
     return this.http.post(this.api + '/user', {name})
   }

   sendMessage(data: any): Observable<Object>{
    return this.http.post(this.api + '/message', data)
   }

   sendMessageOnSocket(data: any): void {
    this.socket.emit('New Message', data);
    }
  getMessages(): Observable<Object> {
    return this.socket.fromEvent('New Message').pipe(map((data: any) => data));
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private apiUrl = 'http://localhost:3000/notifications';

  constructor(private http: HttpClient) {}

  sendNotification(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private apiUrl = 'http://localhost:3001/notifications';

  constructor(private http: HttpClient) {}

  sendNotification(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  getFirebaseApiKey() {
    return environment.firebaseApiKey;
  }

  getAwsRegion() {
    return environment.awsRegion;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: any;
  private userSubject: Subject<any> = new Subject();

  constructor(
    private http: HttpClient
  ) { }

  getUserObservable(): Observable<any> {
    return this.userSubject.asObservable();
  }

  getUser(platform: string, id: string) {
    this.http.get<{ data: object }>(environment.apiUrl + `/api/v1/profile/${platform}/${id}`)
      .subscribe(data => {
        this.user = data.data;
        console.log('User data:', this.user);
      });
  }
}

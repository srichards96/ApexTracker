import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserData } from '../models/UserData/UserData';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUser(platform: string, id: string): Observable<{ data: UserData}> {
    return this.http.get<{ data: UserData}>(environment.apiUrl + `/api/v1/profile/${platform}/${id}`);
  }
}

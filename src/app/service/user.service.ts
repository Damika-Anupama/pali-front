import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {User} from "@src/app/model/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  createAccount(uname: string, email: string, sex: string, pwd: string): Observable<HttpResponse<any>> {
    const createdAt = new Date();
    let gender: number;
    if (sex === 'Male') {
      gender = 0;
    } else if (sex === 'Female') {
      gender = 1;
    } else {
      gender = 2;
    }
    const body = {
      username: uname,
      password: pwd,
      email: email,
      gender: gender,
      createdAt: createdAt,
      role: 3
    };
    console.log(body);
    return this.http.post<HttpResponse<any>>(environment.baseUrl + `/api/v1/users`, body, {
      observe: 'response'
    });
  }

  findUser(query: string): Observable<string> {
    const httpParams = new HttpParams().append('q', query)
      .append('ignoreProgressBar', '');
    return this.http.get<string>(environment.baseUrl + `/api/v1/users/${query}`, {
      params: httpParams
    });
  }

  getUserDetailsById(query: string): Observable<User> {
    const httpParams = new HttpParams().append('q', query);
    return this.http.get<User>(environment.baseUrl + `/api/v1/users/${query}`, {
      params: httpParams
    });
  }

  authenticate(uname: string, pwd: string): Observable<any> {
    const body = {
      username: uname,
      password: pwd
    };
    return this.http.post(environment.baseUrl + `/api/v1/authenticate`, body);
  }
}

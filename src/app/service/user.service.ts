import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@src/environments/environment';
import {User} from '@src/app/model/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  createAccount(uname: string, email: string, contactNumber: string, sex: string, pwd: string): Observable<HttpResponse<any>> {
    let gender: string;
    if (sex === 'Male') {
      gender = 'MALE';
    } else if (sex === 'Female') {
      gender = 'FEMALE';
    } else {
      gender = 'OTHER';
    }

    const body = {
      username: uname,
      password: pwd,
      role: 'USER',
      email,
      gender,
      shortDescription: 'Hello, I\'m a newbie 🐰',
      contactNum: contactNumber
    };
    return this.http.post<HttpResponse<any>>(environment.baseUrl + `/api/v1/users`, body, {
      observe: 'response'
    });
  }

  findUser(query: string): Observable<string> {
    const httpParams = new HttpParams().append('q', query)
      .append('ignoreProgressBar', '');
    return this.http.get<string>(environment.baseUrl + `/api/v1/users/name/` + query);
  }

  getUserDetailsById(query: string | null): Observable<any> {
    return this.http.get<any>(environment.baseUrl + `/api/v1/users/${query}`);
  }

  getProfilePic(query: string | null): Observable<any> {
    return this.http.get<any>(environment.baseUrl + `/api/v1/users/picture/` + query);
  }

  authenticate(uname: string, pwd: string): Observable<any> {
    const body = {
      username: uname,
      password: pwd
    };
    return this.http.post(environment.baseUrl + `/api/v1/authenticate`, body);
  }

  updateUser(userId: string, profilePic: string, shortDes: string, username: string, email: string, phoneNumber: string): Observable<any> {
    const body: FormData = new FormData();
    body.append('id', userId);
    body.append('username', username);
    body.append('email', email);
    body.append('shortDes', shortDes);
    body.append('profilePic', profilePic);
    body.append('phoneNum', phoneNumber);
    console.log(userId,username,)
    return this.http.put<HttpResponse<any>>(environment.baseUrl + `/api/v1/users/` + userId, body,{
      observe: 'response'
    });
  }

  getProfileInfo(userId: string | null): Observable<any> {
    return this.http.get(environment.baseUrl + '/api/v1/users/info/' + userId);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@src/environments/environment';
import { ComBody } from '../model/ComBody';
@Injectable({
    providedIn: 'root'
})
export class communityService {

    constructor(private http: HttpClient) {
    }

    createCommunity(description: string, title: string, groupIcon: File, wallIcon: File): Observable<HttpResponse<any>> {
        const userId: string | null = sessionStorage.getItem('userId');
        const body: FormData = new FormData();
        body.append('description', description);
        body.append('title', title);
        body.append('groupIcon', groupIcon);
        body.append('wallpaper', wallIcon);
        // @ts-ignore
        body.append('userId', userId);
        console.log(groupIcon,wallIcon)
        return this.http.post<HttpResponse<any>>(environment.baseUrl + '/api/v1/community', body, {
            observe: 'response'
        });
    }
    getAllCommunities(): Observable<any> {
        return this.http.get<ComBody>(environment.baseUrl + `/api/v1/community`);
    }
    /* 

    getCommunity(): Observable<any> {
        const id = sessionStorage.getItem('userId');
        return this.http.get<LaunchBody>(environment.baseUrl + `/api/v1/launches/user/${id}`);
    }
     */
}

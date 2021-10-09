import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LikeModel } from '../model/like-model';
@Injectable({
  providedIn: 'root',
})
export class LikeService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  });
  constructor(private http: HttpClient) {}

  public createLike(data: LikeModel[]): Observable<LikeModel[]> {
    const url = `${environment.api}/like/create`;
    return this.http.post<LikeModel[]>(url, data[0], { headers: this.headers });
  }

  public detailLike(id: string): Observable<LikeModel[]> {
    const url = `${environment.api}/like/${id}`;
    return this.http.get<LikeModel[]>(url, { headers: this.headers });
  }

  public updateLike(id: String, data: LikeModel[]): Observable<LikeModel[]> {
    const url = `${environment.api}/like/update/${id}`;
    return this.http.put<LikeModel[]>(url, data[0], { headers: this.headers });
  }

  public findLike(id: string): Observable<LikeModel[]> {
    const url = `${environment.api}/like/find?like=${id}`;
    return this.http.get<LikeModel[]>(url, { headers: this.headers });
  }

  public updateUserLike(
    id: string,
    data: LikeModel[]
  ): Observable<LikeModel[]> {
    const url = `${environment.api}/like/update-like-user/${id}`;
    return this.http.put<LikeModel[]>(url, data[0], { headers: this.headers });
  }
}

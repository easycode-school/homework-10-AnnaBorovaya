import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, map } from 'rxjs/operators';
import { Images } from '../interfaces/images';

@Injectable()
export class UserService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }
  /**
   * getUserInfo - получение информации от сервера о Usere
   */
  public getUserInfo(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/public/users/get-info/${id}`);
  }
  /**
   * getUserImg - получение информции от сервера об изображениях
   * @param id string
   */
  public getUserImg(id: string): Observable<Images> {
    return this.http.get<Images>(`${this.apiUrl}/public/users/my-images/${id}`).pipe(
      map((data: any) => {
          return data.images;
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGlobalService {
  private jwtHelper: JwtHelperService = new JwtHelperService();
  constructor() {}
  /**
   * getToken - метод для получения tokena из localStorage
   */
  get getToken() {// метод для получения токена
    return localStorage.getItem('mlp_client_token');
  }
  /**
   * isTokenExpired - метод для проверки аутентификации пользователя
   * метод вернет true если token просрочен если нет то овернет false
   */
  public isTokenExpired() {
    return this.jwtHelper.isTokenExpired(this.getToken);
  }
  /**
   * getUserId - метод для получения id из tokena
   */
  get getUserId() {
    return this.jwtHelper.decodeToken(this.getToken)['id'];
  }
}

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthGlobalService } from '../services/auth-global.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(
        private auth: AuthGlobalService
    ) {}
    /**
     * intercept - метод который принимает req - объект запроса и next - следующее действие
     * объект запроса перехватываеться
     * объект запроса клонируется и обновляется(каждый запрос отправляется с проставленным tokenom )
     * запрос отправляется дальше на сервер
     * @param req Object
     * @param next Object
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-access-token': `${this.auth.getToken}`
            }
        });
        return next.handle(req);
    }
}
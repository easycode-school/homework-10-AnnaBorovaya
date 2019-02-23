import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGlobalService } from '../services/auth-global.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthGlobalService,
    private router: Router
  ) {

  }
  /**
   * @param route ActivatedRouteSnapshot
   * @param state RouterStateSnapshot
   * canActivate - метода запускающий Guard при активации маршрутизации
   * в Guard проверяется пользователь на наличие непросроченного tokena,
   * если token просрочен то возвращается true и происходит редирект на страницу Login
   * если token не просрочен, то пользователь переходит куда ему нужно
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.auth.isTokenExpired()) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}

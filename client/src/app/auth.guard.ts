import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let localStorageData = localStorage.getItem('user');

    // if data is present in local storage, open /chat, else open home page

    if (localStorageData && state.url !== '/chat') {
      this.router.navigateByUrl('/chat');
    } else if (!localStorageData && state.url !== '/') {
      this.router.navigateByUrl('');
    }
    return true;
  }
}

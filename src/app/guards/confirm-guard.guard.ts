import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {RegisterComponent} from "../register/register.component"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmGuardGuard implements CanDeactivate<RegisterComponent> {
  canDeactivate(
    component:RegisterComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (component.registerForm.dirty) {
        // console.log(component.registerForm)
        return confirm("Are U Sure To Leave ?");
      }
    return true;
  }
}

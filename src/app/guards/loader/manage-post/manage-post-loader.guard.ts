
import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
// import { FakeApiModel } from "src/app/Model/FakeApiModel";
import { PostService } from "../../../post.service";
import { Apimodel } from 'src/app/Apimodel';

@Injectable({
  providedIn: "root"
})
export class ManagePostLoaderGuard implements Resolve<Apimodel[]> {
  constructor(private postService: PostService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Apimodel[]> {
    const stateResolver = new Observable<Apimodel[]>(observer => {
      this.postService.viewActiveUserPost().subscribe((data: Apimodel) => {
       //console.log(data)
        observer.next(data.data);
        observer.complete();
      });
    });

    return stateResolver;
  }
}

import { Component } from '@angular/core';
import { Router,Event,NavigationStart,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-app';
  showLoadingIndicator=true;
  constructor(private router:Router) {
    this.router.events.subscribe((routerEvent:Event)=>{

      if(routerEvent instanceof NavigationStart && routerEvent.url=="/dashboard/profile"){
        console.log(routerEvent);
        console.log(routerEvent.url=="/dashboard/profile");
        this.showLoadingIndicator=true;
      }
      if(routerEvent instanceof NavigationEnd){
        this.showLoadingIndicator=false;
      }
    })
   }
}

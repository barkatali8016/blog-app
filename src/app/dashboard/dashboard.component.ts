import { Component, OnInit } from '@angular/core';
import { Router,Event,NavigationStart,NavigationEnd, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
showLoadingIndicator=true;
  constructor(private router:Router) {
    this.router.events.subscribe((routerEvent:Event)=>{
      if(routerEvent instanceof NavigationStart && routerEvent.url != "/dashboard/profile"){

        this.showLoadingIndicator=true;
      }
      if(routerEvent instanceof NavigationEnd){
        this.showLoadingIndicator=false;
      }
    })
   }

  ngOnInit() {

  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}

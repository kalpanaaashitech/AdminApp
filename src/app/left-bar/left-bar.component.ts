import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent implements OnInit {
  UsersOpen:boolean = false;
  exploreOpen:boolean = false;
  impressOpen:boolean = false;
  travelOpen:boolean = false;
  expressOpen:boolean = false;
  converseOpen:boolean = false;
  curiousOpen:boolean = false;
  
  toggleUsersDirectory(){  
    this.UsersOpen = !this.UsersOpen;
  }

  toggleExploreMenu(){  
    this.exploreOpen = !this.exploreOpen;
  }
  toggleImpressMenu(){  
    this.impressOpen = !this.impressOpen;
  }
  toggleTravelMenu(){  
    this.travelOpen = !this.travelOpen;
  }
  toggleExpressMenu(){  
    this.expressOpen = !this.expressOpen;
  }
  toggleConverseMenu(){  
    this.converseOpen = !this.converseOpen;
  }
  toggleCuriousMenu(){  
    this.curiousOpen = !this.curiousOpen;
  }

  constructor(private router: Router,  private route: ActivatedRoute) {  }

  UserTabOne() : void {
    this.router.navigate([ '/user-page', { outlets: { usertab: 'user-tab-one' } } ])
  }
 


  ngOnInit() {
  }

}

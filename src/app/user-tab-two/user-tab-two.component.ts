import {Component, OnInit, NgModule, VERSION, HostListener} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { UserService } from "../services/user.service";
import {Router, ActivatedRoute, Params  } from '@angular/router';


@Component({
  selector: 'app-user-tab-two',
  templateUrl: './user-tab-two.component.html',
  styleUrls: ['./user-tab-two.component.css']
})
export class UserTabTwoComponent implements OnInit {

  isFollowActive:boolean = false;
  isFollowingActive:boolean = false;
  isCommunityActive:boolean = false;
  followusers: Array<any> = [];
  followingusers: Array<any> = [];
  changeStyle : Function;
  userid;
  id;
  Loader;

  constructor(public userService: UserService, public router: Router,  public route: ActivatedRoute) {
    window.scrollTo(0, 0);
    this.route.parent.params.subscribe((param: any) => this.id = param['id']);
    this.userid = this.id; 
    this.userService.getUserFollowers(this.userid).subscribe(  followusers => this.followusers = followusers);
    this.userService.getUserFollowing(this.userid).subscribe(  followingusers => this.followingusers = followingusers);
    this.changeStyle = function(index){  this.selectedRow = index; };
  }


   UserTabOne(id:string) : void {
     this.router.navigate([ '/user-loading', { id: id} ])
    //  this.router.navigate([ '/user-page', { id: this.id}, { outlets: { usertab: 'user-tab-one' } } ],{ relativeTo: this.route })
   }

  toggleFollow(){  
    this.isFollowActive = !this.isFollowActive;
  }
  toggleFollowing(){  
    this.isFollowingActive = !this.isFollowingActive;
  }
  toggleCommunity(){  
    this.isCommunityActive = !this.isCommunityActive;
  }

  ngOnInit() {
    this.Loader = true;
    setTimeout(()=>{  this.Loader = false;  },10000);
  }


}

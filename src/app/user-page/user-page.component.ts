import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
  providers: []
})
export class UserPageComponent implements OnInit {
  users;
  UserTabClass1;
  UserTabClass2;
  UserTabClass3;
  UserTabClass4;
  public userid ;

  constructor(private router: Router, private userService: UserService,  private route: ActivatedRoute) {
    window.scrollTo(0, 0);
    this.UserTabClass1 = "active";
    this.UserTabClass2 = this.UserTabClass3 = this.UserTabClass4 = "";
    this.userid = this.route.snapshot.params['id'];
    this.userService.getUserDetails(this.userid).subscribe(users => this.users = users);
   }

   UserTabOne() : void {
    this.UserTabClass1 = "active";
    this.UserTabClass2 = this.UserTabClass3 =  this.UserTabClass4 = "";
    this.router.navigate([ '/user-page', { id: this.userid}, {outlets: { usertab: 'user-tab-one' }}] ,{ relativeTo: this.route })

  }

  UserTabTwo() : void {
    this.UserTabClass2 = "active";
    this.UserTabClass3 = this.UserTabClass4 =  this.UserTabClass1 = "";
    this.router.navigate([ '/user-page', { id: this.userid}, {outlets: {usertab: 'user-tab-two'}}] ,{ relativeTo: this.route })

  }

  UserTabThree() : void {
    this.UserTabClass3 = "active";
    this.UserTabClass4 = this.UserTabClass1 = this.UserTabClass2 = "";
    this.router.navigate([ '/user-page', { id: this.userid}, {outlets: {usertab: 'user-tab-three'}}] ,{ relativeTo: this.route })

  }
  UserTabFour() : void {
    this.UserTabClass4 = "active";
    this.UserTabClass1 = this.UserTabClass2 = this.UserTabClass3 = "";
    this.router.navigate([ '/user-page', { id: this.userid}, {outlets: { usertab: 'user-tab-four'}}] ,{ relativeTo: this.route })
  }

  ngOnInit() {
  }

}

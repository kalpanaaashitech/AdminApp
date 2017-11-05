import {Component, OnInit, NgModule, VERSION, HostListener} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { UserService } from "../services/user.service";
import {Router, ActivatedRoute, Params  } from '@angular/router';


@Component({
  selector: 'app-user-loading',
  templateUrl: './user-loading.component.html',
  styleUrls: ['./user-loading.component.css']
})
export class UserLoadingComponent implements OnInit {

  userid;
  id;

  constructor(public userService: UserService, public router: Router,  public route: ActivatedRoute) { 
    this.route.params.subscribe((param: any) => this.id = param['id']);
    
  }

  ngOnInit() {
     this.router.navigate([ '/user-page', { id: this.id}, { outlets: { usertab: 'user-tab-one' } } ],{ relativeTo: this.route })
  }

}

import {Component, OnInit, NgModule, VERSION} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from "../services/user.service";

import { FilterEamil } from '../pipes/all-user-filter-email';
import { FilterJob } from '../pipes/all-user-filter-job';

@Component({
  selector: 'app-all-users-left-bar',
  templateUrl: './all-users-left-bar.component.html',
  styleUrls: ['./all-users-left-bar.component.css']
})
export class AllUsersLeftBarComponent implements OnInit {
  users;
  // names:any;
  isActive1:boolean = false;
  isActive2:boolean = false;
  isActive3:boolean = false;
  isActive4:boolean = false;

  constructor(private userService: UserService){
    window.scrollTo(0, 0);
     this.userService.getUsers("0").subscribe(  users => this.users = users);
  }

  toggleActive1(){  
    this.isActive1 = !this.isActive1;
  }
  toggleActive2(){  
    this.isActive2 = !this.isActive2;
  }
  toggleActive3(){  
    this.isActive3 = !this.isActive3;
  }
  toggleActive4(){  
    this.isActive4 = !this.isActive4;
  }

  ngOnInit() {
  }

}

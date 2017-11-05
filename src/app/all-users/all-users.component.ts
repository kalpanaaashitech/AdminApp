import {Component, OnInit, NgModule, VERSION, HostListener} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { UserService } from "../services/user.service";
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import {Router, ActivatedRoute, Params  } from '@angular/router';

import { AllUserFilter } from '../pipes/all-user-filter';
import { FilterCity } from '../pipes/all-user-filter-citys';
import { FilterStates } from '../pipes/all-user-filter-state';
import { FilterCountrys } from '../pipes/all-user-filter-country';
import { FilterJob } from '../pipes/all-user-filter-job';
import { FilterEamil } from '../pipes/all-user-filter-email';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
  providers: [ UserService ]
})

export class AllUsersComponent{

  users: Array<any> = [];
  usersnew: Array<any> = [];
  InscubeNames: Array<any>;
  Citys: Array<any>;
  States: Array<any>;
  Countrys: Array<any>;
  limit;
  Message;
  state_params;
  limitnew:number = 0;
  continues;
  changeStyle : Function;
  Msg:boolean = false;
  Continu:boolean = false;
  End:boolean = false;
  isActive1:boolean = false;
  isActive2:boolean = false;
  isActive3:boolean = false;
  isActive4:boolean = false;
  isActive5:boolean = false;
  isActive6:boolean = false;

  constructor(public userService: UserService, public router: Router,  public route: ActivatedRoute) {
    window.scrollTo(0, 0);
      this.userService.getUsers("0").subscribe(  users => this.users = users);
      this.userService.getAllInscubeNames().subscribe( InscubeName => this.InscubeNames = InscubeName);
      this.userService.getAllCitys().subscribe( Citys => this.Citys = Citys);
      this.userService.getAllState().subscribe( States => this.States = States);
      this.userService.getAllCountry().subscribe( Countrys => this.Countrys = Countrys);
      this.changeStyle = function(index){  this.selectedRow = index; };
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {

  let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
  let max = document.documentElement.scrollHeight;
   if(pos == max && this.continues != '0')   {
      this.Continu = true;
      this.End = false;
      this.limit = "12";
      this.limitnew = +this.limitnew + +this.limit;
      this.userService.getUsers(this.limitnew).subscribe( 
      (usersnew) => { this.usersnew = usersnew, this.continues = usersnew[0].continues
        }, (error) => { console.log('error', error);
        }, () => { this.users = [...this.users, ...this.usersnew];  }
      ); 
   }
   if(this.continues == '0'){
    this.End = true;
    this.Continu = false;
   }
  }

  

 UserTabOne(id:string) : void {
  this.router.navigate([ '/user-page', { id: id}, { outlets: { usertab: 'user-tab-one' } } ],{ relativeTo: this.route })
 }

 SearchCity(id:string,name:string,count:string){
   this.users = [] ;
   this.state_params ="city_id///"+id;
   this.continues = "0";
   this.Message = name + " City Based Filterd Users ";
   this.Msg = true;
   this.userService.getAllUsersFilter(this.state_params).subscribe(users => this.users = users);
   this.End = true;
   this.Continu = false;
 }
 SearchState(id:string,name:string,count:string){
  this.users = [] ;
  this.state_params ="state_id///"+id;
  this.continues = "0";
  this.Message = name + " State Based Filterd Users ";
  this.Msg = true;
  this.userService.getAllUsersFilter(this.state_params).subscribe(users => this.users = users);
  this.End = true;
  this.Continu = false;
}
SearchCountry(id:string,name:string,count:string){
  this.users = [] ;
  this.state_params ="country_id///"+id;
  this.continues = "0";
  this.Message = name + " Country Based Filterd Users ";
  this.Msg = true;
  this.userService.getAllUsersFilter(this.state_params).subscribe(users => this.users = users);
  this.End = true;
  this.Continu = false;
}
AllUsers(){
  this.users = [] ;
  this.continues = "1";
  this.Msg = false;
  this.userService.getUsers("0").subscribe(users => this.users = users);
  this.End = false;
  this.Continu = true;
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
toggleActive5(){  
  this.isActive5 = !this.isActive5;
}
toggleActive6(){  
  this.isActive6 = !this.isActive6;
}


}


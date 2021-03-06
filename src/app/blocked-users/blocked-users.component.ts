import {Component, OnInit, NgModule, VERSION, HostListener} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { UserService } from "../services/user.service";
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import {Router, ActivatedRoute, Params  } from '@angular/router';

import { DialogsService } from '../dialogs/dialogs.service';

import { AllUserFilter } from '../pipes/all-user-filter';

@Component({
  selector: 'app-blocked-users',
  templateUrl: './blocked-users.component.html',
  styleUrls: ['./blocked-users.component.css']
})
export class BlockedUsersComponent implements OnInit {

  users: Array<any> = [];
  Loader;
  user_id;
  block_status;
  delete_status;
  changeStyle : Function;
  public result: any;
  

  constructor(private dialogsService: DialogsService, public userService: UserService, public router: Router,  public route: ActivatedRoute) {
    window.scrollTo(0, 0);
    this.userService.getBlockedUsers().subscribe(  users => this.users = users);
    this.changeStyle = function(index){  this.selectedRow = index; };
   }

   UserTabOne(id:string) : void {
    this.router.navigate([ '/user-page', { id: id}, { outlets: { usertab: 'user-tab-one' } } ],{ relativeTo: this.route })
   }


   UnBlockUser(id:string,) : void {
    this.dialogsService.confirm('Confirm Dialog', 'Are you sure you want to Un Block this User ?')
    .subscribe((res) => {this.result = res},(error) => {console.log('error', error);}, 
    () => {  if(this.result == true) {
                this.user_id = id ;
                this.userService.unblockUser(this.user_id).subscribe((status) => {this.block_status = status}, (error) => {console.log('error', error);}); 
                    if(this.block_status = 1){
                          this.users = this.users.filter(item =>  item.id !== id );
                    }
              }
          } 
    );
  }

  
  DeleteUser(id:string) : void {
    this.dialogsService.confirm('Confirm Dialog', 'Are you sure you want Delete this User, if User Deleted this User All Posts Also Deleted. ?')
    .subscribe((res) => {this.result = res},(error) => {console.log('error', error);}, 
    () => {  if(this.result == true) {
                this.user_id = id ;
                this.userService.deleteUser(this.user_id).subscribe((status) => {this.delete_status = status}, (error) => {console.log('error', error);}); 
                    if(this.delete_status = 1){
                       this.users = this.users.filter(item =>  item.id !== id );
                    }
              }
          }
    );
  }




  ngOnInit() {
    this.Loader = true;
    setTimeout(()=>{  this.Loader = false;  },10000);
  }

}

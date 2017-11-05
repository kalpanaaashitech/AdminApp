import {Component, OnInit, NgModule, VERSION, HostListener} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { UserService } from "../services/user.service";
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import {Router, ActivatedRoute, Params  } from '@angular/router';

import { DialogsService } from '../dialogs/dialogs.service';



@Component({
  selector: 'app-duplicate-users',
  templateUrl: './duplicate-users.component.html',
  styleUrls: ['./duplicate-users.component.css'],
  providers: [ UserService ]
})
export class DuplicateUsersComponent implements OnInit {
  emailDuplicts: Array<any> = [];
  mobileDuplicts: Array<any> = [];
  withoutEmails: Array<any> = [];
  EmailDupUserView : Function;
  MobileDupUserView : Function;
  WithoutEmUserView : Function;
  changeStyle : Function;
  newcla: Function;
  Loader;
  user_id;
  block_status;
  delete_status;
  public result: any;


  constructor(private dialogsService: DialogsService, public userService: UserService, public router: Router,  public route: ActivatedRoute) { 
    window.scrollTo(0, 0);
    this.userService.getEmailDuplicateUsers().subscribe(emailDuplicts => this.emailDuplicts = emailDuplicts);
    this.userService.getMobileDuplicateUsers().subscribe(mobileDuplicts => this.mobileDuplicts = mobileDuplicts);
    this.userService.getWithoutEmailUsers().subscribe(withoutEmails => this.withoutEmails = withoutEmails);


    this.EmailDupUserView = function(index){  this.EmailDuplicateUserView = index; };
    this.MobileDupUserView = function(index){  this.MobileDuplicateUserView = index; };
    this.WithoutEmUserView = function(index){  this.WithoutEmailUserView = index; };

    this.changeStyle = function(index){  this.selectedRow = index; };
  }

  
  ngOnInit() {
    this.Loader = true;
    setTimeout(()=>{  this.Loader = false;  },10000);
  }

  UserTabOne(id:string) : void {
    this.router.navigate([ '/user-page', { id: id}, { outlets: { usertab: 'user-tab-one' } } ],{ relativeTo: this.route })
   }


  BlockUserEmailDuplicate(id:string, rowid:string, index:string, rowindex:string) : void {
    this.dialogsService.confirm('Confirm Dialog', 'Are you sure you want to Block this User ?')
    .subscribe((res) => {this.result = res},(error) => {console.log('error', error);}, 
    () => {  if(this.result == true) {
                this.user_id = id ;
                this.userService.blockUser(this.user_id).subscribe((status) => {this.block_status = status}, (error) => {console.log('error', error);}); 
                    if(this.block_status = 1){
                      this.emailDuplicts[rowindex]['users'] = this.emailDuplicts[rowindex]['users'].filter(item =>  item.id !== id );
                      if((this.emailDuplicts[rowindex]['users']).length == 1){
                          this.emailDuplicts = this.emailDuplicts.filter(item =>  item.id !== rowid );
                      }
                    }
              }
          } 
    );
  }

  
  DeleteUserEmailDuplicate(id:string, rowid:string, index:string, rowindex:string) : void {
    this.dialogsService.confirm('Confirm Dialog', 'Are you sure you want Delete this User, if User Deleted this User All Posts Also Deleted. ?')
    .subscribe((res) => {this.result = res},(error) => {console.log('error', error);}, 
    () => {  if(this.result == true) {
                this.user_id = id ;
                this.userService.deleteUser(this.user_id).subscribe((status) => {this.delete_status = status}, (error) => {console.log('error', error);}); 
                    if(this.delete_status = 1){
                      this.emailDuplicts[rowindex]['users'] = this.emailDuplicts[rowindex]['users'].filter(item =>  item.id !== id );
                      if((this.emailDuplicts[rowindex]['users']).length == 1){
                          this.emailDuplicts = this.emailDuplicts.filter(item =>  item.id !== rowid );
                      }
                    }
              }
          }
    );
  }




  BlockUserMobileDuplicate(id:string, rowid:string, index:string, rowindex:string) : void {
    this.dialogsService.confirm('Confirm Dialog', 'Are you sure you want to Block this User ?')
    .subscribe((res) => {this.result = res},(error) => {console.log('error', error);}, 
    () => {  if(this.result == true) {
                this.user_id = id ;
                this.userService.blockUser(this.user_id).subscribe((status) => {this.block_status = status}, (error) => {console.log('error', error);}); 
                    if(this.block_status = 1){
                      this.mobileDuplicts[rowindex]['users'] = this.mobileDuplicts[rowindex]['users'].filter(item =>  item.id !== id );
                      if((this.mobileDuplicts[rowindex]['users']).length == 1){
                          this.mobileDuplicts = this.mobileDuplicts.filter(item =>  item.id !== rowid );
                      }
                    }
              }
          } 
    );
  }

  
  DeleteUserMobileDuplicate(id:string, rowid:string, index:string, rowindex:string) : void {
    this.dialogsService.confirm('Confirm Dialog', 'Are you sure you want Delete this User, if User Deleted this User All Posts Also Deleted. ?')
    .subscribe((res) => {this.result = res},(error) => {console.log('error', error);}, 
    () => {  if(this.result == true) {
                this.user_id = id ;
                this.userService.deleteUser(this.user_id).subscribe((status) => {this.delete_status = status}, (error) => {console.log('error', error);}); 
                    if(this.delete_status = 1){
                      this.mobileDuplicts[rowindex]['users'] = this.mobileDuplicts[rowindex]['users'].filter(item =>  item.id !== id );
                      if((this.mobileDuplicts[rowindex]['users']).length == 1){
                          this.mobileDuplicts = this.mobileDuplicts.filter(item =>  item.id !== rowid );
                      }
                    }
              }
          }
    );
  }





  BlockUserWithoutEmail(id:string, index:string) : void {
    this.dialogsService.confirm('Confirm Dialog', 'Are you sure you want to Block this User ?')
    .subscribe((res) => {this.result = res},(error) => {console.log('error', error);}, 
    () => {  if(this.result == true) {
                this.user_id = id ;
                this.userService.blockUser(this.user_id).subscribe((status) => {this.block_status = status}, (error) => {console.log('error', error);}); 
                    if(this.block_status = 1){
                        this.withoutEmails = this.withoutEmails.filter(item => item.id !== id);
                    }
              }
          } 
    );
  }


  DeleteUserWithoutEmail(id:string, index:string) : void {
    this.dialogsService.confirm('Confirm Dialog', 'Are you sure you want Delete this User, if User Deleted this User All Posts Also Deleted. ?')
    .subscribe((res) => {this.result = res},(error) => {console.log('error', error);}, 
    () => {  if(this.result == true) {
                this.user_id = id ;
                this.userService.deleteUser(this.user_id).subscribe((status) => {this.delete_status = status}, (error) => {console.log('error', error);}); 
                    if(this.delete_status = 1){
                        this.withoutEmails = this.withoutEmails.filter(item => item.id !== id);
                    }
              }
          }
    );
  }











}

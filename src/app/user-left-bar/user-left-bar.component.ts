import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { UserService } from "../services/user.service";

import { DialogsService } from '../dialogs/dialogs.service';

@Component({
  selector: 'app-user-left-bar',
  templateUrl: './user-left-bar.component.html',
  styleUrls: ['./user-left-bar.component.css']
})
export class UserLeftBarComponent implements OnInit {

  users;
  user_id;
  block_status;
  delete_status;
  public result: any;

  public userid ;
  constructor(private dialogsService: DialogsService, private router: Router, private userService: UserService,  private route: ActivatedRoute) {
    window.scrollTo(0, 0);
    this.userid = this.route.snapshot.params['id'];
    this.userService.getUserDetails(this.userid).subscribe(users =>{ this.handleData(users)});
   }


  BlockUser(id:string) : void {
    this.dialogsService.confirm('Confirm Dialog', 'Are you sure you want to Block this User ?')
    .subscribe((res) => {this.result = res},(error) => {console.log('error', error);}, 
    () => {  if(this.result == true) {
                this.user_id = id ;
                this.userService.blockUser(this.user_id).subscribe((status) => {this.block_status = status}, (error) => {console.log('error', error);}); 
                    if(this.block_status = 1){
                      this.userService.getUserDetails(this.user_id).subscribe(users =>{ this.handleData(users)});
                    }
              }
          } 
    );
  }

  UnBlockUser(id:string) : void {
    this.dialogsService.confirm('Confirm Dialog', 'Are you sure you want to Un Block this User ?')
    .subscribe((res) => {this.result = res},(error) => {console.log('error', error);}, 
    () => {  if(this.result == true) {
                this.user_id = id ;
                this.userService.unblockUser(this.user_id).subscribe((status) => {this.block_status = status}, (error) => {console.log('error', error);}); 
                    if(this.block_status = 1){
                      this.userService.getUserDetails(this.user_id).subscribe(users =>{ this.handleData(users)});
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
                this.userService.unblockUser(this.user_id).subscribe((status) => {this.block_status = status}, (error) => {console.log('error', error);}); 
                    if(this.block_status = 1){
                      this.router.navigate([ '/all-users' ])
                    }
              }
          } 
    );
  }
  



  private handleData(data: string) {
    this.users = data;
 }

  ngOnInit() {
  }

}

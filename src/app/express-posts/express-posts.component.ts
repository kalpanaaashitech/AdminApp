import { Component, OnInit, OnDestroy, HostListener  } from '@angular/core';
import {Router, ActivatedRoute, Params  } from '@angular/router';
import { UserService } from "../services/user.service";
import { DatePipe } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { DialogsService } from '../dialogs/dialogs.service';

@Component({
  selector: 'app-express-posts',
  templateUrl: './express-posts.component.html',
  styleUrls: ['./express-posts.component.css']
})
export class ExpressPostsComponent implements OnInit {
  posts: Array<any> = [];
  postsnew: Array<any> = [];
  public date ;
  Loader;
  user_id;
  block_status;
  public result: any;

  Msg:boolean = false;
  Continu:boolean = false;
  End:boolean = false;
  limit;
  limitnew:number = 0;
  continues;

  constructor(private dialogsService: DialogsService, private router: Router, private userService: UserService,  private route: ActivatedRoute) {
    window.scrollTo(0, 0);
    this.date = new(Date);
    this.userService.getExpressPosts("0").subscribe( (posts) => { this.posts = posts, this.continues = posts[0].continues });
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
       this.userService.getExpressPosts(this.limitnew).subscribe( 
       (postsnew) => { this.postsnew = postsnew, this.continues = postsnew[0].continues
         }, (error) => { console.log('error', error);
         }, () => { this.posts = [...this.posts, ...this.postsnew];  }
       ); 
    }
    if(this.continues == '0'){
     this.End = true;
     this.Continu = false;
    }
   }


   UserPage(id:string) : void {
    this.router.navigate([ '/user-page', { id: id}, { outlets: { usertab: 'user-tab-one' } } ],{ relativeTo: this.route })
  }

  BlockPost(id:string) : void {
    this.dialogsService.confirm('Confirm Dialog', 'Are you sure you want Block this Post ?')
    .subscribe((res) => {this.result = res},(error) => {console.log('error', error);}, 
    () => {  if(this.result == true) {
                this.user_id = id ;
                this.userService.blockPost(this.user_id).subscribe((status) => {this.block_status = status}, (error) => {console.log('error', error);}); 
                    if(this.block_status = 1){
                       this.posts = this.posts.filter(item =>  item.id !== id );
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

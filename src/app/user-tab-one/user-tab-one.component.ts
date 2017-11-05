import { Component, OnInit, OnDestroy  } from '@angular/core';
import {Router, ActivatedRoute, Params  } from '@angular/router';
import { DatePipe } from '@angular/common';
import { UserService } from "../services/user.service";
import { YoutubeReplace } from "../pipes/replace-youtube-embed";
import { GmapAdd } from '../pipes/travel-map-link';
import { ImageZoom } from 'angular2-image-zoom';
import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'app-user-tab-one',
  templateUrl: './user-tab-one.component.html',
  styleUrls: ['./user-tab-one.component.css']
})
export class UserTabOneComponent implements OnInit {

  public posts;
  public id ;
  public userid ;
  public date ;
  Loader;


  constructor(private router: Router, private userService: UserService,  private route: ActivatedRoute) {
    window.scrollTo(0, 0);
    this.route.parent.params.subscribe((param: any) => this.id = param['id']);
    this.userid = this.id;
    this.date = new(Date);
    this.userService.getUserPosts(this.userid).subscribe(  posts => this.posts = posts);

   }
   
   ngOnInit() {
    this.Loader = true;
    setTimeout(()=>{  this.Loader = false;  },10000);
  }

}

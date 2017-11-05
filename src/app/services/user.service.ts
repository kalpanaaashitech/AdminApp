import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from "../models/user";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
 
@Injectable()
export class UserService implements OnInit{
   constructor(private http: Http) {
      this.http = http;
   }
  
    getUsers(limitid): Observable<any> {        
        return this.http.get("http://inscube.com/api/get_all_user.php?id="+ limitid)
        .map(res => res.json());
    }
    getEmailDuplicateUsers(): Observable<any> {        
        return this.http.get(" http://inscube.com/api/get_user_email_duplicates.php")
        .map(res => res.json());
    }
    getMobileDuplicateUsers(): Observable<any> {        
        return this.http.get(" http://inscube.com/api/get_user_mobile_duplicates.php")
        .map(res => res.json());
    }
    getWithoutEmailUsers(): Observable<any> {        
        return this.http.get(" http://inscube.com/api/get_user_without_email.php")
        .map(res => res.json());
    }
    getAllInscubeNames(): Observable<any> {        
        return this.http.get("http://inscube.com/api/get_all_users_inscubenames.php")
        .map(res => res.json());
    }
    getBlockedUsers(): Observable<any> {        
        return this.http.get("http://inscube.com/api/get_all_blocked_users.php")
        .map(res => res.json());
    }
    getDeletedUsers(): Observable<any> {        
        return this.http.get("http://inscube.com/api/get_all_deleted_users.php")
        .map(res => res.json());
    }
    getInActiveUsers(): Observable<any> {        
        return this.http.get("http://inscube.com/api/get_all_inactive_users.php")
        .map(res => res.json());
    }
    blockUser(id): Observable<any> {        
        return this.http.get("http://inscube.com/api/user_block.php?id="+id)
        .map(res => res.json());
    }
    unblockUser(id): Observable<any> {        
        return this.http.get("http://inscube.com/api/user_unblock.php?id="+id)
        .map(res => res.json());
    }
    deleteUser(id): Observable<any> {        
        return this.http.get("http://inscube.com/api/user_delete.php?id="+id)
        .map(res => res.json());
    }
    undoUser(id): Observable<any> {        
        return this.http.get("http://inscube.com/api/user_undo.php?id="+id)
        .map(res => res.json());
    }
    reActiveUser(id): Observable<any> {        
        return this.http.get("http://inscube.com/api/user_reactive.php?id="+id)
        .map(res => res.json());
    }
    getAllCitys(): Observable<any> {        
        return this.http.get("http://inscube.com/api/get_all_users_citys.php")
        .map(res => res.json());
    }
    getAllState(): Observable<any> {        
        return this.http.get("http://inscube.com/api/get_all_users_states.php")
        .map(res => res.json());
    }
    getAllCountry(): Observable<any> {        
        return this.http.get("http://inscube.com/api/get_all_users_countrys.php")
        .map(res => res.json());
    }
    getAllUsersFilter(type): Observable<any> {        
        return this.http.get("http://inscube.com/api/get_all_users_filter.php?type="+type)
        .map(res => res.json());
    }
    getUserDetails(userid): Observable<any> {        
        return this.http.get("http://inscube.com/api/get_user.php?id="+ userid)
        .map(res => res.json());
    }
    // getCity(cityid): Observable<any> {        
    //     return this.http.get("http://inscube.com/api/get_city_name.php?id="+ cityid)
    //     .map(res => res.json());
    // }
    // getState(stateid): Observable<any> {        
    //     return this.http.get("http://inscube.com/api/get_state_name.php?id="+ stateid)
    //     .map(res => res.json());
    // }
    // getCountry(countryid): Observable<any> {        
    //     return this.http.get("http://inscube.com/api/get_country_name.php?id="+ countryid)
    //     .map(res => res.json());
    // }
    getUserPosts(userid): Observable<any> {        
        return this.http.get("http://inscube.com/api/get_user_posts.php?id="+ userid)
        .map(res => res.json());
    }
    getUserFollowers(userid): Observable<any> {        
        return this.http.get("http://inscube.com/api/get_user_followers.php?id="+ userid)
        .map(res => res.json());
    }
    getUserFollowing(userid): Observable<any> {        
        return this.http.get("http://inscube.com/api/get_user_following.php?id="+ userid)
        .map(res => res.json());
    }
    getExplorePosts(limitid): Observable<any> {        
        return this.http.get("http://inscube.com/api/get_explore_posts.php?id="+ limitid)
        .map(res => res.json());
    }
    getImpressPosts(limitid): Observable<any> {        
        return this.http.get("http://inscube.com/api/get_impress_posts.php?id="+ limitid)
        .map(res => res.json());
    }
    getMustdosPosts(limitid): Observable<any> {        
        return this.http.get("http://inscube.com/api/get_mustdos_posts.php?id="+ limitid)
        .map(res => res.json());
    }
    getExpressPosts(limitid): Observable<any> {        
        return this.http.get("http://inscube.com/api/get_express_posts.php?id="+ limitid)
        .map(res => res.json());
    }
    getConversePosts(limitid): Observable<any> {        
        return this.http.get("http://inscube.com/api/get_converse_posts.php?id="+ limitid)
        .map(res => res.json());
    }
    getCuriousPosts(limitid): Observable<any> {        
        return this.http.get("http://inscube.com/api/get_curious_posts.php?id="+ limitid)
        .map(res => res.json());
    }
    
    getTestUsers(): Observable<any> {        
        return this.http.get("http://inscube.com/api/test.php")
        .map(res => res.json());
    }
    
    blockPost(id): Observable<any> {        
        return this.http.get("http://inscube.com/api/post_block.php?id="+id)
        .map(res => res.json());
    }


    ngOnInit() {
    }

}


import{ NgModule} from "@angular/core";
import{ Component } from "@angular/core";
import{ Routes, RouterModule } from "@angular/router";

import { MainPageComponent} from "./main-page/main-page.component";
import { AllUsersComponent} from "./all-users/all-users.component";
import { DuplicateUsersComponent } from "./duplicate-users/duplicate-users.component";
import { BlockedUsersComponent } from "./blocked-users/blocked-users.component";
import { DeletedUsersComponent } from "./deleted-users/deleted-users.component";
import { InactiveUsersComponent } from "./inactive-users/inactive-users.component";
import { UserPageComponent} from "./user-page/user-page.component";
import { UserTabOneComponent} from "./user-tab-one/user-tab-one.component";
import { UserTabTwoComponent} from "./user-tab-two/user-tab-two.component";
import { UserLoadingComponent} from "./user-loading/user-loading.component";
import { UserTabThreeComponent} from "./user-tab-three/user-tab-three.component";
import { UserTabFourComponent} from "./user-tab-four/user-tab-four.component";
import { ExplorePostsComponent } from "./explore-posts/explore-posts.component";
import { ImpressPostsComponent } from "./impress-posts/impress-posts.component";
import { TravelPostsComponent } from "./travel-posts/travel-posts.component";
import { ExpressPostsComponent } from "./express-posts/express-posts.component";
import { ConversePostsComponent } from "./converse-posts/converse-posts.component";
import { CuriousPostsComponent } from "./curious-posts/curious-posts.component";


const routes : Routes = [
    { path : "", redirectTo:"all-users", pathMatch :"full"},
    { path : "main-page", component : MainPageComponent },
    { path : "all-users", component : AllUsersComponent },
    { path : "duplicate-users", component : DuplicateUsersComponent },
    { path : "blocked-users", component : BlockedUsersComponent },
    { path : "deleted-users", component : DeletedUsersComponent },
    { path : "inactive-users", component : InactiveUsersComponent },
    { path : "user-loading", component : UserLoadingComponent },
    { path : "user-page", component : UserPageComponent, children : [
        { path : "user-tab-one", component : UserTabOneComponent, outlet : "usertab"},
        { path : "user-tab-two", component : UserTabTwoComponent, outlet : "usertab"},
        { path : "user-tab-three", component : UserTabThreeComponent, outlet : "usertab"},
        { path : "user-tab-four", component : UserTabFourComponent, outlet : "usertab"}
    ]},
    { path : "explore-posts", component : ExplorePostsComponent },
    { path : "impress-posts", component : ImpressPostsComponent },
    { path : "travel-posts", component : TravelPostsComponent },
    { path : "express-posts", component : ExpressPostsComponent },
    { path : "converse-posts", component : ConversePostsComponent },
    { path : "curious-posts", component : CuriousPostsComponent }
];

@NgModule({
    imports : [ RouterModule.forRoot(routes)],
    exports : [RouterModule],
    providers : []
})

export class RoutingModule {}
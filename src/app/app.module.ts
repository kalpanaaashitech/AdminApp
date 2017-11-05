import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {ImageZoomModule} from 'angular2-image-zoom';

import {GoTopButtonModule} from 'ng2-go-top-button';

import {TabsModule} from "ngx-tabs";
import { DataScrollerModule } from 'primeng/primeng';


import { RoutingModule } from './app.routing';


import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserLeftBarComponent } from './user-left-bar/user-left-bar.component';
import { UserTabOneComponent } from './user-tab-one/user-tab-one.component';
import { UserTabTwoComponent } from './user-tab-two/user-tab-two.component';
import { UserTabThreeComponent } from './user-tab-three/user-tab-three.component';
import { UserTabFourComponent } from './user-tab-four/user-tab-four.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { AllUsersLeftBarComponent } from './all-users-left-bar/all-users-left-bar.component';
import { UserService } from "./services/user.service";
import { FilterEamil } from './pipes/all-user-filter-email';
import { FilterJob } from './pipes/all-user-filter-job';
import { AllUserFilter } from './pipes/all-user-filter';
import { FilterCity } from './pipes/all-user-filter-citys';
import { FilterStates } from './pipes/all-user-filter-state';
import { FilterCountrys } from './pipes/all-user-filter-country';
import { YoutubeReplace } from './pipes/replace-youtube-embed';
import { GmapAdd } from './pipes/travel-map-link';
import { ExplorePostsComponent } from './explore-posts/explore-posts.component';
import { ImpressPostsComponent } from './impress-posts/impress-posts.component';
import { TravelPostsComponent } from './travel-posts/travel-posts.component';
import { ExpressPostsComponent } from './express-posts/express-posts.component';
import { ConversePostsComponent } from './converse-posts/converse-posts.component';
import { CuriousPostsComponent } from './curious-posts/curious-posts.component';
import { DuplicateUsersComponent } from './duplicate-users/duplicate-users.component'; 
import { DialogsModule } from './dialogs/dialogs.module';
import { BlockedUsersComponent } from './blocked-users/blocked-users.component';
import { DeletedUsersComponent } from './deleted-users/deleted-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { UserLoadingComponent } from './user-loading/user-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MainPageComponent,
    LeftBarComponent,
    UserPageComponent,
    UserLeftBarComponent,
    UserTabOneComponent,
    UserTabTwoComponent,
    UserTabThreeComponent,
    UserTabFourComponent,
    AllUsersComponent,
    AllUsersLeftBarComponent,
    FilterEamil,
    FilterJob,
    AllUserFilter,
    FilterCity,
    FilterStates,
    FilterCountrys,
    YoutubeReplace,
    GmapAdd,
    ExplorePostsComponent,
    ImpressPostsComponent,
    TravelPostsComponent,
    ExpressPostsComponent,
    ConversePostsComponent,
    CuriousPostsComponent,
    DuplicateUsersComponent,
    BlockedUsersComponent,
    DeletedUsersComponent,
    InactiveUsersComponent,
    UserLoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    Ng2SmartTableModule,
    RoutingModule,
    ImageZoomModule,
    TabsModule,
    DataScrollerModule,
    GoTopButtonModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    DialogsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }


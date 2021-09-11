import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search/search.component';
import {FormsModule} from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { ParentComponent } from './viewchild/parent/parent.component';
import { ChildComponent } from './viewchild/child/child.component';
import { InpOutParentComponent } from './input-output/inp-out-parent/inp-out-parent.component';
import { InpOutChildComponent } from './input-output/inp-out-child/inp-out-child.component';
import { UserListComponent } from './user-list/user-list.component';
import { RxjsparentComponent } from './rxjs/rxjsparent/rxjsparent.component';
import { RxjschildComponent } from './rxjs/rxjschild/rxjschild.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchPipe,
    ParentComponent,
    ChildComponent,
    InpOutParentComponent,
    InpOutChildComponent,
    UserListComponent,
    RxjsparentComponent,
    RxjschildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

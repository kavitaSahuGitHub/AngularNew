import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Calcomp1Component } from './calcomp1/calcomp1.component';
import { Calcomp2Component } from './calcomp2/calcomp2.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { CountPipe } from './count.pipe';
import { FilterPipe } from './filter.pipe';
import { FilterpipeComponent } from './filterpipe/filterpipe.component';
@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    Comp1Component,
    Comp2Component,
    Calcomp1Component,
    Calcomp2Component,
    UserComponent,
    PipedemoComponent,
    CountPipe,
    FilterPipe,
    FilterpipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

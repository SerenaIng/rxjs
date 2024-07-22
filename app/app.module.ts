import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule  } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

import { PullSearchComponent } from './pull-based/pull-search/pull-search.component';
import { PullBasedComponent } from './pull-based/pull-based.component';
import { PushBasedComponent } from './push-based/push-based.component';
import { HeaderComponent } from './shared/header/header.component';
import { PullResultsComponent } from './pull-based/pull-results/pull-results.component';
import { PushSearchComponent } from './push-based/push-search/push-search.component';
import { PushResultsComponent } from './push-based/push-results/push-results.component';

@NgModule({
  declarations: [
    AppComponent, PullBasedComponent, PushBasedComponent, HeaderComponent, PullSearchComponent, PullResultsComponent, PushSearchComponent,
    PushResultsComponent
  ],
  imports: [
    BrowserModule, FlexLayoutModule, AppRoutingModule, BrowserAnimationsModule, FormsModule, MatSelectModule, MatFormFieldModule,
    MatInputModule, HttpClientModule, MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

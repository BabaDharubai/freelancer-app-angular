import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewlistComponent } from './components/viewlist/viewlist.component';
import { ViewdetailsComponent } from './components/viewdetails/viewdetails.component';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './material/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule} from '@angular/flex-layout'
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './utils/filter.pipe';
import { ExperiencePipe } from './utils/experience.pipe';
import { ViewgridComponent } from './components/viewgrid/viewgrid.component';
import { ListingComponent } from './components/listing/listing.component';
import { DetailedViewComponent } from './components/detailed-view/detailed-view.component';
import { ResizeableDirective } from './directive/resizeable.directive';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ViewlistComponent,
    ViewdetailsComponent,
    NavBarComponent,
    FilterPipe,
    ExperiencePipe,
    ViewgridComponent,
    ListingComponent,
    DetailedViewComponent,
    ResizeableDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

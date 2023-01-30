import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DetailedViewComponent } from './components/detailed-view/detailed-view.component';
import { ListingComponent } from './components/listing/listing.component';
import { ViewdetailsComponent } from './components/viewdetails/viewdetails.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'view-listing',
    pathMatch:'full'
  },
  {
    path:'view-listing',
    component:ListingComponent,
    canActivate:[AuthGuard],
    data:{roles:["manager","user","editor"]}
  },
  {
    path:'add-freelancer',
    component:ViewdetailsComponent,
    canActivate:[AuthGuard],
    data:{roles:["manager"]}
  },
  {
    path:'edit-freelancer/:freelancerId',
    component:ViewdetailsComponent,
    canActivate:[AuthGuard],
    data:{roles:["manager","editor"]}
  },
  {
    path:'view-details/:freelancerId',
    component:DetailedViewComponent,
    canActivate:[AuthGuard],
    data:{roles:["manager","user","editor"]}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

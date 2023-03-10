import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _authService:AuthService) { }

  ngOnInit(): void {
    
  }
  
  userProfile(){
    this._authService.redirectToProfile();
  }
  logout(){
    this._authService.logout();
  }
}

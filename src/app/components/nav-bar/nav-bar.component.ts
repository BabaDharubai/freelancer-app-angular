import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(
    private _authService: AuthService,
    private _location: Location
  ) {}

  roles: string[] = [];
  ngOnInit(): void {
    this.roles = this._authService.getRoles();
    
  }

  goBack() {
    this._location.back();
    
  }
}

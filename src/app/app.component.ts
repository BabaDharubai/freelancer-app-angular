import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'freelancer-application';

  constructor(private _location:Location){}

  goBack(){
    this._location.back()
  }

}

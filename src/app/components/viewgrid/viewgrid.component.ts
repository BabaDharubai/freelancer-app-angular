import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Freelancer } from 'src/app/models/freelancer';
import { FreelancerService } from 'src/app/services/freelancer.service';

@Component({
  selector: 'app-viewgrid',
  templateUrl: './viewgrid.component.html',
  styleUrls: ['./viewgrid.component.css']
})
export class ViewgridComponent implements OnInit {

  constructor(private _router:Router) { }

  @Input()freelancers!:Freelancer[];
  ngOnInit(): void {

  }

  route(freelancerId:string){
    if(freelancerId)
      this._router.navigate(["/view-details",freelancerId]);
  }

}

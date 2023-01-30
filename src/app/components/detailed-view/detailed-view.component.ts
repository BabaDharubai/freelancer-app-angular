import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Freelancer } from 'src/app/models/freelancer';
import { FreelancerService } from 'src/app/services/freelancer.service';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css'],
})
export class DetailedViewComponent implements OnInit {
  constructor(
    private _freelancerService: FreelancerService,
    private _activatedRoute: ActivatedRoute,
    private _snackBar:MatSnackBar,
    private _authService:AuthService,
    private _location:Location
  ) {}
  freelancer!: Freelancer;
  roles!:string[];
  ngOnInit(): void {
    this.roles=this._authService.getRoles();
    this._activatedRoute.paramMap.subscribe((map) => {
      let id = map.get('freelancerId');
      if (id) {
        this._freelancerService.getById(id).subscribe({
          next: (data) => {
            this.freelancer = data;
          },
          error: (error) =>{
            this._snackBar.open('Freelancer Not Found','Dismiss'),{
             horizontalPosition:'center',
             verticalPosition:'center',
             duration:1000

            }
           console.log(error)
          },
          complete: () => console.log('get By Id completed'),
        });
      }
    });
  }


  deleteFreelancer(freelancerId:string){
    this._freelancerService.deleteFreelancer(freelancerId).subscribe({
      next:(data)=>console.log(data),
      error:(error)=>console.log(error),
      complete:()=>console.log("delete request is completed")
    });
    this._location.back();
  }

}

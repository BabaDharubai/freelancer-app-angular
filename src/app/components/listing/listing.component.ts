import { Component,  OnInit } from '@angular/core';

import { PageEvent } from '@angular/material/paginator';
import { AuthService } from 'src/app/auth/service/auth.service';

import { Freelancer } from 'src/app/models/freelancer';
import { FreelancerService } from 'src/app/services/freelancer.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  grid:boolean=true;
  freelancers:Freelancer[]=[];
  displayedColumns:string[]=[];
  length!:number;
  sortKey!:string;
  sortOption!:boolean;
  records:number=10;
  index:number=0;
  roles!:string[];
  constructor(private _freelancerService:FreelancerService,
              private _autService:AuthService
             ) { }


  ngOnInit(): void {

    this.sortKey="_id";
    this.sortOption=false;
    this.grid=true;
    this._freelancerService.getFreelacners().subscribe({
      next:(data)=>{
        this.displayedColumns=data.columns;
        this.length=data.data.length
        this.roles=this._autService.getRoles();
        if(this.roles.includes('manager')||this.roles.includes('editor'))
          this.displayedColumns.push('edit');
      },
      error:(error)=>console.log(error),
      complete:()=>("retrieved columns to display")
    });

    this._freelancerService.getFreelancerPage(this.sortKey,this.sortOption, this.index,this.records).subscribe({
      next:(data)=>{
        this.freelancers=data;
      },
      error:(error)=>console.log(error),
      complete:()=>console.log("page request completed")
    })
    
  }

  change(){
    this.grid=!this.grid;
  }
 
  onPageChange(PageSizeOptions:PageEvent){
    this.records=PageSizeOptions.pageSize;
    this.index=PageSizeOptions.pageIndex;
    this.getFreelancers();
  }

  sort(sortData:{column:string,sortOption:boolean}){
    this.sortKey=sortData.column;
    this.sortOption=sortData.sortOption
    this.getFreelancers();
    
  }

  getFreelancers(){
    this._freelancerService.getFreelancerPage(this.sortKey,this.sortOption, this.index,this.records).subscribe({
      next:(data)=>{
        this.freelancers=data;
      },
      error:(error)=>console.log(error),
      complete:()=>console.log("page request completed")
    })
  }

}

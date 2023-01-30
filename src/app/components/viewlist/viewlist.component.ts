import { Location } from '@angular/common';
import { Component, Input, OnInit, TemplateRef,Output, EventEmitter, OnChanges} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Freelancer } from 'src/app/models/freelancer';
import { FreelancerService } from 'src/app/services/freelancer.service';



@Component({
  selector: 'app-viewlist',
  templateUrl: './viewlist.component.html',
  styleUrls: ['./viewlist.component.css']
})
export class ViewlistComponent implements OnInit , OnChanges {

  constructor(private _freelancerService:FreelancerService,
              private _dialog:MatDialog,
              private _authService:AuthService,
              private _router:Router,
              private _snackBar:MatSnackBar,
              private _location:Location
              ) {}

  @Input() freelancers:Freelancer[]=[];

  @Input() displayedColumns:string[]=[];

  @Output() sort=new EventEmitter<{column:string,sortOption:boolean}>();

  roles!:string[];
  verifyColumns:boolean=true;
  options!:string[]
  datasource=new MatTableDataSource(this.freelancers);
  


  ngOnInit(): void {
    this.roles=this._authService.getRoles();
  }

  ngOnChanges(){
    if(this.verifyColumns){
      this.options=this.displayedColumns;
    if(this.displayedColumns.length>0){
      this.verifyColumns=false;
    }
  }
  this.datasource.data=this.freelancers;
  }
 

  openDialog(pick:TemplateRef<MatDialog>){
    this._dialog.open(pick);
  }
  
  show=(filter:string[]|any)=>{
    if(filter)
      this.options=filter;
  }

  route(event:Event, freelancerId:string){
    if(freelancerId){
      if((event.target as HTMLTableRowElement).nodeName==='TD')
        this._router.navigate(["/view-details",freelancerId]);
    }   
  }

  deleteFreelancer(freelancerId:string){
    this._freelancerService.deleteFreelancer(freelancerId).subscribe({
      next:(data)=>{
        console.log(data);
        this._snackBar.open('Deleted Successfully','Dismiss',{
          duration:100
        })
      },
      error:(error)=>{
        console.log(error);
        this._snackBar.open('Delete Unsuccessfull','Dismiss',{
          duration:100
        })
      },
      complete:()=>{
        console.log("delete request is completed")
        this._location.historyGo(0);
      }
    })
  }

  selectAll(){
    this.options=this.displayedColumns;
  }
  removeOptions(){
    this.options=[];
  }

  editFreelancer(freelancer_id:string){
    this._router.navigate(['/edit-freelancer',freelancer_id])
  }

  sortData(sort:Sort){
    if(sort.direction==='asc'){
      this.sort.emit({column:sort.active,sortOption:false})
    }
    if(sort.direction==='desc'){
      this.sort.emit({column:sort.active,sortOption:true})
    }
  }
  
  search(event:Event){
    this.datasource.filter=(event.target as HTMLInputElement).value
  }

}

import { Location } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { category } from 'src/app/models/category';
import { Freelancer } from 'src/app/models/freelancer';
import { language } from 'src/app/models/language';
import { skill } from 'src/app/models/skill';
import { FreelancerService } from 'src/app/services/freelancer.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css'],
})
export class ViewdetailsComponent implements OnInit {

  skills=Object.values(skill).filter(val=>typeof val==='string')
  languages=Object.values(language).filter(val=>typeof val==='string')
  categoriess=Object.values(category).filter(val=>typeof val==='string')

  constructor(
    private _freelancerService: FreelancerService,
    private _activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private _authService: AuthService,
    private _dialog: MatDialog,
    private _location: Location,
    private _snackBar:MatSnackBar
  ) {}

  roles!: string[];
  editable: boolean = false;
  formName!: string;
  maxDate: Date = new Date();

  @ViewChild('success') success!: TemplateRef<MatDialog>;

  @ViewChild('failure') failure!: TemplateRef<MatDialog>;

  freelancer: FormGroup = this.fb.group({
    _id: [],
    _rev: [],
    name: ['', [Validators.required,Validators.maxLength(20)]],
    userName: ['', [Validators.required,Validators.maxLength(20)]],
    email: ['', [Validators.email, Validators.required]],
    mobile: ['', [Validators.required]],
    address: this.fb.group({
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      zip: ['', [Validators.required]],
    }),
    category: [],
    hoursPerWeek: ['', [Validators.max(168)]],
    rating: ['', [Validators.min(0), Validators.max(5), Validators.required]],
    talentQuality: ['', [Validators.required]],
    availableBadge: ['', [Validators.required]],
    skills: [],
    gender: ['', [Validators.required]],
    languages: [],
    jobsCompleted: [
      '',
      [Validators.required, Validators.max(100), Validators.min(0)],
    ],
    joinedDate: [],
    pricePerHour: [],
    description: [],
    certificates: this.fb.array([]),
    experiences: this.fb.array([]),
  });

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((map) => {
      let id = map.get('freelancerId');
      if (id) {
        this.formName = 'Update Freelancer';
        this.editable = true;
        this._freelancerService.getById(id).subscribe({
          next: (data) => {
            for (let i = 0; i < data.certificates.length; i++) {
              this.addCertificateButton();
            }
            for (let i = 0; i < data.experiences.length; i++) {
              this.addExperienceButton();
            }
            this.freelancer.setValue(data);
          },
          error: (error) =>{
            this._snackBar.open('Freelancer Not Found','Dismiss'),{
              horizontalPosition:'center',
              verticalPosition:'center',
              duration:100
 
             }
          console.log(error)
          },
          complete: () => console.log('get By Id completed'),
        });
      } else {
        this.formName = 'Add Freelancer';
      }
    });
    this.roles = this._authService.getRoles();
  }

  addFreelancer(freelancer: Freelancer) {
    this._activatedRoute.paramMap.subscribe((map) => {
      let id = map.get('freelancerId');
      if (id) {
        this._freelancerService.updateFreelancer(freelancer).subscribe({
          next: (data) => {
            this._dialog.open(this.success);
          },
          error: (error) => {
            console.log(error);
            this._dialog.open(this.failure);
          },
          complete: () => console.log('update completed'),
        });
      } else {
        this._freelancerService.saveFreelancer(freelancer).subscribe({
          next: (data) => {
            this._dialog.open(this.success);
          },
          error: (error) => {
            console.log(error);
            this._dialog.open(this.failure);
          },
          complete: () => console.log('Adding freelancer Request is completed'),
        });
      }
    });
  }

  addCertificateFormGroup(): FormGroup {
    return this.fb.group({
      course: [],
      duration: [],
      provider: [],
    });
  }

  addCertificateButton(): void {
    (<FormArray>this.freelancer.get('certificates')).push(
      this.addCertificateFormGroup()
    );
  }

  addExperienceFormGroup(): FormGroup {
    return this.fb.group({
      companyName: [],
      role: [],
      startDate: [],
      endDate: [],
    });
  }

  addExperienceButton(): void {
    (<FormArray>this.freelancer.get('experiences')).push(
      this.addExperienceFormGroup()
    );
  }

  get certificates() {
    return this.freelancer.get('certificates') as FormArray;
  }

  get experiences() {
    return this.freelancer.get('experiences') as FormArray;
  }

  resetDetails() {
    let id=this.freelancer.get('_id')?.value
    this.freelancer.reset();
    this.freelancer.get('_id')?.setValue(id);
  }

  resetSkill() {
    this.freelancer.get('skills')?.reset();
  }
  resetCategory() {
    this.freelancer.get('category')?.reset();
  }
  resetLanguage() {
    this.freelancer.get('languages')?.reset();
  }

  deleteCertificate(index: number): void {
    (<FormArray>this.freelancer.get('certificates')).removeAt(index);
  }

  deleteExperience(index: number): void {
    (<FormArray>this.freelancer.get('experiences')).removeAt(index);
  }

  reload() {
    this._location.historyGo(0);
  }
}

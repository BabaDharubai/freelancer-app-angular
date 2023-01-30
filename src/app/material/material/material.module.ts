import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ MatIconModule}from '@angular/material/icon';
import{ MatButtonModule}from '@angular/material/button'
import{ MatToolbarModule}from '@angular/material/toolbar';
import{ MatTableModule}from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select'
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatChipsModule} from '@angular/material/chips';
import {MatSliderModule} from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { CustomPaginatorService } from 'src/app/utils/custom-paginator.service';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatSelectModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatPaginatorModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatTooltipModule,
    MatChipsModule,
    MatSliderModule,
    MatSidenavModule,
    MatDividerModule,
    MatSnackBarModule,
    MatSortModule,
    MatAutocompleteModule,
    MatButtonToggleModule
    
  ],
  exports:[
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatListModule,
    MatSelectModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatPaginatorModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatTooltipModule,
    MatChipsModule,
    MatSliderModule,
    MatSidenavModule,
    MatDividerModule,
    MatSnackBarModule,
    MatSortModule,
    MatAutocompleteModule,
    MatButtonToggleModule
    
  ],
  providers:[
  {provide:MatPaginatorIntl,useClass:CustomPaginatorService}
  ]
})
export class MaterialModule { }

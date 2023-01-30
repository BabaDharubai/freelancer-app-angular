import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgridComponent } from './viewgrid.component';

describe('ViewgridComponent', () => {
  let component: ViewgridComponent;
  let fixture: ComponentFixture<ViewgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewgridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

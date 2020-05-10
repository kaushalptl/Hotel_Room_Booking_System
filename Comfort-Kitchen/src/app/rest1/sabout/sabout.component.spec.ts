import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaboutComponent } from './sabout.component';

describe('SaboutComponent', () => {
  let component: SaboutComponent;
  let fixture: ComponentFixture<SaboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

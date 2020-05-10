import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaboutComponent } from './wabout.component';

describe('WaboutComponent', () => {
  let component: WaboutComponent;
  let fixture: ComponentFixture<WaboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

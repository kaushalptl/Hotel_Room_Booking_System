import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NnavbarComponent } from './nnavbar.component';

describe('NnavbarComponent', () => {
  let component: NnavbarComponent;
  let fixture: ComponentFixture<NnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

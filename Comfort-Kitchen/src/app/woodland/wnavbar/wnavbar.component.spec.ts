import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WnavbarComponent } from './wnavbar.component';

describe('WnavbarComponent', () => {
  let component: WnavbarComponent;
  let fixture: ComponentFixture<WnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhmenuComponent } from './bhmenu.component';

describe('BhmenuComponent', () => {
  let component: BhmenuComponent;
  let fixture: ComponentFixture<BhmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

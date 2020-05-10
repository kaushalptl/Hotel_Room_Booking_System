import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhbnavbarComponent } from './bhbnavbar.component';

describe('BhbnavbarComponent', () => {
  let component: BhbnavbarComponent;
  let fixture: ComponentFixture<BhbnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhbnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhbnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

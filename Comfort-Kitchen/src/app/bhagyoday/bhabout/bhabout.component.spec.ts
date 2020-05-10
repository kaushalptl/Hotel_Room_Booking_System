import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhaboutComponent } from './bhabout.component';

describe('BhaboutComponent', () => {
  let component: BhaboutComponent;
  let fixture: ComponentFixture<BhaboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhaboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

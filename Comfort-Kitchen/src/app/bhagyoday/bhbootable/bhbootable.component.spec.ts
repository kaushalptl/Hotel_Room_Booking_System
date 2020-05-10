import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhbootableComponent } from './bhbootable.component';

describe('BhbootableComponent', () => {
  let component: BhbootableComponent;
  let fixture: ComponentFixture<BhbootableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhbootableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhbootableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

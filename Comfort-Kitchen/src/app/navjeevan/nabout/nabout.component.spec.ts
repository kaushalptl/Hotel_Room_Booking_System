import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaboutComponent } from './nabout.component';

describe('NaboutComponent', () => {
  let component: NaboutComponent;
  let fixture: ComponentFixture<NaboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

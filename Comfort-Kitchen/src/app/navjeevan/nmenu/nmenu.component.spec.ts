import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NmenuComponent } from './nmenu.component';

describe('NmenuComponent', () => {
  let component: NmenuComponent;
  let fixture: ComponentFixture<NmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

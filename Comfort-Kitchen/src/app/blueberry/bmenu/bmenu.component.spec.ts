import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmenuComponent } from './bmenu.component';

describe('BmenuComponent', () => {
  let component: BmenuComponent;
  let fixture: ComponentFixture<BmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

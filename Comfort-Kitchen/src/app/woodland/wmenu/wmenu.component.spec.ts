import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmenuComponent } from './wmenu.component';

describe('WmenuComponent', () => {
  let component: WmenuComponent;
  let fixture: ComponentFixture<WmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

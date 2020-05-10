import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WbookComponent } from './wbook.component';

describe('WbookComponent', () => {
  let component: WbookComponent;
  let fixture: ComponentFixture<WbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

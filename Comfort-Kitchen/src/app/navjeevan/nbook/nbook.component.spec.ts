import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbookComponent } from './nbook.component';

describe('NbookComponent', () => {
  let component: NbookComponent;
  let fixture: ComponentFixture<NbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

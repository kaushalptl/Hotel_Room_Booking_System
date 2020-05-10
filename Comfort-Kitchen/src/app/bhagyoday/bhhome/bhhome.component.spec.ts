import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhhomeComponent } from './bhhome.component';

describe('BhhomeComponent', () => {
  let component: BhhomeComponent;
  let fixture: ComponentFixture<BhhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

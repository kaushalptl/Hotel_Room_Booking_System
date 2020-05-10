import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbooktableComponent } from './bbooktable.component';

describe('BbooktableComponent', () => {
  let component: BbooktableComponent;
  let fixture: ComponentFixture<BbooktableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbooktableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbooktableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

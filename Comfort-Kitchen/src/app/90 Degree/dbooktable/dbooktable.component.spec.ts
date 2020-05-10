import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbooktableComponent } from './dbooktable.component';

describe('DbooktableComponent', () => {
  let component: DbooktableComponent;
  let fixture: ComponentFixture<DbooktableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbooktableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbooktableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

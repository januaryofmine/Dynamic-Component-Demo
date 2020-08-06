import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicContentOneComponent } from './dynamic-content-one.component';

describe('DynamicContentOneComponent', () => {
  let component: DynamicContentOneComponent;
  let fixture: ComponentFixture<DynamicContentOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicContentOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicContentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

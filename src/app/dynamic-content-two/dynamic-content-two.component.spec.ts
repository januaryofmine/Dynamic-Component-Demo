import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicContentTwoComponent } from './dynamic-content-two.component';

describe('DynamicContentTwoComponent', () => {
  let component: DynamicContentTwoComponent;
  let fixture: ComponentFixture<DynamicContentTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicContentTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicContentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

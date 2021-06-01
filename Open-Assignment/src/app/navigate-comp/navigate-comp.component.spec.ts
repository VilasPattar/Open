import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateCompComponent } from './navigate-comp.component';

describe('NavigateCompComponent', () => {
  let component: NavigateCompComponent;
  let fixture: ComponentFixture<NavigateCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigateCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigateCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

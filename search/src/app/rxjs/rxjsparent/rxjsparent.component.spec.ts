import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsparentComponent } from './rxjsparent.component';

describe('RxjsparentComponent', () => {
  let component: RxjsparentComponent;
  let fixture: ComponentFixture<RxjsparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

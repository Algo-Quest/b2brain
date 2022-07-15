import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelsComponent } from './intels.component';

describe('IntelsComponent', () => {
  let component: IntelsComponent;
  let fixture: ComponentFixture<IntelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

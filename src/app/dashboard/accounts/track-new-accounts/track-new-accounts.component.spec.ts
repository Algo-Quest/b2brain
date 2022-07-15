import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackNewAccountsComponent } from './track-new-accounts.component';

describe('TrackNewAccountsComponent', () => {
  let component: TrackNewAccountsComponent;
  let fixture: ComponentFixture<TrackNewAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackNewAccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackNewAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

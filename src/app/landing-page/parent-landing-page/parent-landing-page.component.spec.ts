import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLandingPageComponent } from './parent-landing-page.component';

describe('ParentLandingPageComponent', () => {
  let component: ParentLandingPageComponent;
  let fixture: ComponentFixture<ParentLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentLandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

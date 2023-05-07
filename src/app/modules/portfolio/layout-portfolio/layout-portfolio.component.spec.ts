import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPortfolioComponent } from './layout-portfolio.component';

describe('LayoutPortfolioComponent', () => {
  let component: LayoutPortfolioComponent;
  let fixture: ComponentFixture<LayoutPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

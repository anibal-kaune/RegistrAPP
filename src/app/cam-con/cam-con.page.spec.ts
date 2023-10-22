import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamConPage } from './cam-con.page';

describe('CamConPage', () => {
  let component: CamConPage;
  let fixture: ComponentFixture<CamConPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamConPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

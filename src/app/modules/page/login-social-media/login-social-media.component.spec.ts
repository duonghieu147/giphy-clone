import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSocialMediaComponent } from './login-social-media.component';

describe('LoginSocialMediaComponent', () => {
  let component: LoginSocialMediaComponent;
  let fixture: ComponentFixture<LoginSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSocialMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

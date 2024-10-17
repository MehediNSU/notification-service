import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderCredentialsComponent } from './provider-credentials.component';

describe('ProviderCredentialsComponent', () => {
  let component: ProviderCredentialsComponent;
  let fixture: ComponentFixture<ProviderCredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderCredentialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

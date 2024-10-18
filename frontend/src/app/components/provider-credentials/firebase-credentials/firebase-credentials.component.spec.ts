import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirebaseCredentialsComponent } from './firebase-credentials.component';

describe('FirebaseCredentialsComponent', () => {
  let component: FirebaseCredentialsComponent;
  let fixture: ComponentFixture<FirebaseCredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirebaseCredentialsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FirebaseCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

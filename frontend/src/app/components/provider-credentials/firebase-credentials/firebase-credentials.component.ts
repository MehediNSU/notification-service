import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firebase-credentials',
  templateUrl: './firebase-credentials.component.html',
  styleUrls: ['./firebase-credentials.component.scss'],
})
export class FirebaseCredentialsComponent implements OnInit {
  @Input() provider: string | null = null;
  credentialsForm: FormGroup;

  constructor(private fb: FormBuilder, private _router: Router) {
    this.credentialsForm = this.fb.group({
      apiKey: ['', Validators.required],
      projectId: ['', Validators.required],
      awsAccessKey: [''],
      awsSecretKey: [''],
    });
  }

  ngOnInit(): void {
    if (this.provider === 'aws') {
      // Optionally, add any specific logic for AWS here
    }
  }

  onSubmit(): void {
    if (this.credentialsForm.valid) {
      console.log('Credentials:', this.credentialsForm.value);
      // Handle the submission of credentials
    } else {
      console.log('Form is invalid');
    }
  }
  goToPrev() {
    this._router.navigate(['provider-selection']);
  }
}

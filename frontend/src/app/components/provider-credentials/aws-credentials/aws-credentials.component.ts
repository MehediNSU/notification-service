import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aws-credentials',
  templateUrl: './aws-credentials.component.html',
  styleUrls: ['./aws-credentials.component.scss'],
})
export class AwsCredentialsComponent implements OnInit {
  @Input() provider: string | null = null;
  credentialsForm: FormGroup;

  constructor(private fb: FormBuilder, private _router: Router) {
    this.credentialsForm = this.fb.group({
      accessKeyId: ['', Validators.required],
      secretAccessKey: ['', Validators.required],
      region: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.provider === 'aws') {
      // Any specific logic for AWS SNS, if needed
    }
  }

  onSubmit(): void {
    if (this.credentialsForm.valid) {
      console.log('AWS SNS Credentials:', this.credentialsForm.value);

      // Reset the form after submission
      this.credentialsForm.reset();
    } else {
      console.log('Form is invalid', this.credentialsForm.errors);
      for (const control in this.credentialsForm.controls) {
        if (this.credentialsForm.controls[control].invalid) {
          console.log(`${control} is invalid`);
        }
      }
    }
  }

  goToPrev() {
    this._router.navigate(['provider-selection']);
  }
}

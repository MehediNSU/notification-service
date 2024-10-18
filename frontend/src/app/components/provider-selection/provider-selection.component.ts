import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-selection',
  templateUrl: './provider-selection.component.html',
  styleUrls: ['./provider-selection.component.scss'],
})
export class ProviderSelectionComponent implements OnInit {
  providerForm: FormGroup;
  selectedProvider: string | null = null;

  constructor(private fb: FormBuilder, private _router: Router) {
    this.providerForm = this.fb.group({
      provider: [''],
    });
  }

  ngOnInit(): void {}

  onProviderSelect(event: any): void {
    this.selectedProvider = event?.target?.value;
    console.log(`Selected provider: ${this.selectedProvider}}`);
  }

  goToCredentials() {
    if (this.selectedProvider == 'firebase') {
      this._router.navigate(['firebase-credentials']);
    }
    if (this.selectedProvider == 'aws sns') {
      this._router.navigate(['aws-credentials']);
    }
  }
}

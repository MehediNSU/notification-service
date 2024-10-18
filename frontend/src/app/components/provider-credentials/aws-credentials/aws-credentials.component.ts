import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aws-credentials',
  templateUrl: './aws-credentials.component.html',
  styleUrls: ['./aws-credentials.component.scss'],
})
export class AwsCredentialsComponent {
  constructor(private _router: Router) {}

  goToPrev() {
    this._router.navigate(['provider-selection']);
  }
}

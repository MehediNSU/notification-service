import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwsCredentialsComponent } from './components/provider-credentials/aws-credentials/aws-credentials.component';
import { FirebaseCredentialsComponent } from './components/provider-credentials/firebase-credentials/firebase-credentials.component';
import { ProviderSelectionComponent } from './components/provider-selection/provider-selection.component';

const routes: Routes = [
  { path: '', redirectTo: '/provider-selection', pathMatch: 'full' },
  { path: 'provider-selection', component: ProviderSelectionComponent },
  { path: 'firebase-credentials', component: FirebaseCredentialsComponent },
  { path: 'aws-credentials', component: AwsCredentialsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

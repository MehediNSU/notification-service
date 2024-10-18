import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirebaseCredentialsComponent } from './components/provider-credentials/firebase/firebase-credentials.component';
import { ProviderSelectionComponent } from './components/provider-selection/provider-selection.component';

const routes: Routes = [
  { path: '', redirectTo: '/provider-selection', pathMatch: 'full' },
  { path: 'provider-selection', component: ProviderSelectionComponent },
  { path: 'firebase-credentials', component: FirebaseCredentialsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

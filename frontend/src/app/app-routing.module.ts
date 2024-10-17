import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderCredentialsComponent } from './components/provider-credentials/provider-credentials.component';
import { ProviderSelectionComponent } from './components/provider-selection/provider-selection.component';

const routes: Routes = [
  { path: '', redirectTo: '/provider-selection', pathMatch: 'full' },
  { path: 'provider-selection', component: ProviderSelectionComponent },
  { path: 'provider-credentials', component: ProviderCredentialsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProviderCredentialsComponent } from './components/provider-credentials/provider-credentials.component';
import { ProviderSelectionComponent } from './components/provider-selection/provider-selection.component';
import { NotificationService } from './services/notification.service';

@NgModule({
  declarations: [
    AppComponent,
    ProviderSelectionComponent,
    ProviderCredentialsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AwsCredentialsComponent } from './components/provider-credentials/aws-credentials/aws-credentials.component';
import { FirebaseCredentialsComponent } from './components/provider-credentials/firebase-credentials/firebase-credentials.component';
import { ProviderSelectionComponent } from './components/provider-selection/provider-selection.component';
import { NotificationService } from './services/notification.service';

@NgModule({
  declarations: [
    AppComponent,
    ProviderSelectionComponent,
    FirebaseCredentialsComponent,
    AwsCredentialsComponent,
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

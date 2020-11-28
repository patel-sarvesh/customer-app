import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CustomerReducer } from './reducers/customer.reducer';
import { HomeComponent } from './home/home.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { CustomerService } from './shared/services/customer.service';
import { HttpClientInterceptor } from './httpClinet.interceptor';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffects } from './effects/customer.effect';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './shared/services/toastr.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddCustomerComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ customer: CustomerReducer }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    HttpClientModule,
    EffectsModule.forRoot([CustomerEffects]),
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right'
    }),
    BrowserAnimationsModule
  ],
  providers: [
    CustomerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClientInterceptor,
      multi: true
    },
    NotificationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

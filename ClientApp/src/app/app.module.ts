import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { DynamicRouteService } from './core/services/dynamic-route.service';
import { DynamicFeatureComponent } from './core/components/dynamic-feature/dynamic-feature.component';

import { MainLayoutModule } from './layout/main-layout/main-layout.module';
import { LoginModule } from './auth/login/login.module';
import { RegisterModule } from './auth/register/register.module';
import { ForgotPasswordModule } from './auth/forgot-password/forgot-password.module';
import { ResetPasswordModule } from './auth/reset-password/reset-password.module';
import { SharedModule } from './shared/shared.module';

export function initializeDynamicRoutes(dynamicRouteService: DynamicRouteService): () => Promise<void> {
  return () => dynamicRouteService.initialize();
}

@NgModule({
  declarations: [
    AppComponent,
    DynamicFeatureComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MainLayoutModule,
    LoginModule,
    RegisterModule,
    ForgotPasswordModule,
    ResetPasswordModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: APP_INITIALIZER, useFactory: initializeDynamicRoutes, deps: [DynamicRouteService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { Signup1PageComponent } from './pages/signup1-page/signup1-page.component';
import { Signup2PageComponent } from './pages/signup2-page/signup2-page.component';
import { VerifyEmailPageComponent } from './pages/verify-email-page/verify-email-page.component';
import { VerifyEmail2PageComponent } from './pages/verify-email2-page/verify-email2-page.component';
import { EmailVerifiedPageComponent } from './pages/email-verified-page/email-verified-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroBannerComponent,
    MainPageComponent,
    LoginPageComponent,
    CardComponent,
    InputComponent,
    Signup1PageComponent,
    Signup2PageComponent,
    VerifyEmailPageComponent,
    VerifyEmail2PageComponent,
    EmailVerifiedPageComponent,
    ForgotPasswordPageComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

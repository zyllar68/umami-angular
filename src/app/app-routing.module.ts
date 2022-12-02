import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { ForgotPassword2PageComponent } from './pages/forgot-password2-page/forgot-password2-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { Signup1PageComponent } from './pages/signup1-page/signup1-page.component';
import { Signup2PageComponent } from './pages/signup2-page/signup2-page.component';
import { VerifyEmailPageComponent } from './pages/verify-email-page/verify-email-page.component';
import { VerifyEmail2PageComponent } from './pages/verify-email2-page/verify-email2-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    title: 'umami',
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'sign-up',
    component: Signup1PageComponent,
  },
  {
    path: 'register',
    component: Signup2PageComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordPageComponent,
  },
  {
    path: 'change-password',
    component: ForgotPassword2PageComponent,
  },
  {
    path: 'contact-us',
    component: ContactPageComponent,
  },
  {
    path: 'verify-email',
    component: VerifyEmailPageComponent,
  },
  {
    path: 'verified',
    component: VerifyEmail2PageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

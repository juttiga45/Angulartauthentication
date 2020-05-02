import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ContentComponent } from "./content/content.component";
import { ErrorPageComponent } from "./errorpage/errorpage.component";
import { 
  AuthGuardService as AuthGuard 
} from './auth/auth-guard.service';

const routes: Routes = [
    { path: '', redirectTo: "loginpage", pathMatch: "full" },
    { path: "loginpage", component: LoginComponent },
    { path: "registration", component: RegistrationComponent },
    { path: "contentpage", component: ContentComponent,  canActivate: [AuthGuard]  },
    { path: "**", component: ErrorPageComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


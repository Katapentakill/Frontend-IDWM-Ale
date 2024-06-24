import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { EditProfileComponent } from "./pages/edit-profile/edit-profile.component";
import { ChangePasswordComponent } from "./pages/change-password/change-password.component";

const routes: Routes = [

   { path: '', component: LoginComponent},
   { path: 'login', component: LoginComponent},
   { path: 'register', component: RegisterComponent},
   { path: 'editProfile', component: EditProfileComponent},
   { path: 'home', component: HomePageComponent},
   { path: 'changePassword', component: ChangePasswordComponent},
   {path: '**', redirectTo: 'LoginComponent'}
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})

export class AuthRoutingModule { }

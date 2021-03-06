import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { Home } from '@components/home/home.component';
import { Account } from '@components/account/account.component';
import { Login } from '@components/login/login.component';
import { Register } from '@components/register/register.component';
import { Pci } from '@components/pci/pci.component';
import { AuthGuardService } from '@services/authguard.service';






const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'account', component: Account, canActivate: [AuthGuardService] },
   { path: 'account/pci', component: Pci, canActivate: [AuthGuardService] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

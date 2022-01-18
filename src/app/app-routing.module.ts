import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/auth/account/account.component';
import { CompareComponent } from './components/compare/compare.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FO4Component } from './components/fo4/fo4.component';
import { AuthGuard } from './components/guards/auth/auth.guard';
import { MainComponent } from './components/main/main.component';
import { ProdpageComponent } from './components/prodpage/prodpage.component';
import { CartComponent } from './components/shop/cart/cart.component';
import { CheckoutComponent } from './components/shop/checkout/checkout.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: AccountComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'compare', component: CompareComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'prodpage', component: ProdpageComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'fO4', component: FO4Component },
  { path: "**", redirectTo: 'fO4', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

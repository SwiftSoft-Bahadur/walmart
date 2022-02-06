import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { CartComponent } from './components/shop/cart/cart.component';
import { CartItemComponent } from './components/shop/cart-item/cart-item.component';
import { CheckoutComponent } from './components/shop/checkout/checkout.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CompareComponent } from './components/compare/compare.component';
import { AppendorPipe } from './pipes/appendor.pipe';
import { LoginComponent } from './components/auth/login/login.component';
import { ProdpageComponent } from './components/prodpage/prodpage.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FO4Component } from './components/fo4/fo4.component';
import { MobilemenuComponent } from './components/mobilemenu/mobilemenu.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './shared/jwt/jwt.interceptor';
import { AuthService } from './shared/auth/auth.service';
import { SessionService } from './shared/session/session.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from './shared/category/category.service';
import { IntrosectionComponent } from './components/introsection/introsection.component';
import { SwiperContainerComponent } from './components/swiper-container/swiper-container.component';
import { CategorySectionComponent } from './components/category-section/category-section.component';
import { PopularDepartmentsComponent } from './components/popular-departments/popular-departments.component';
import { StickyFooterComponent } from './components/sticky-footer/sticky-footer.component';
import { NewsletterPopupComponent } from './components/newsletter-popup/newsletter-popup.component';
import { QuickViewComponent } from './components/quick-view/quick-view.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountComponent } from './components/auth/account/account.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { SignupComponent } from './components/auth/signup/signup.component';
import {MatTabsModule} from '@angular/material/tabs';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SortPipe } from './pipes/sort/sort.pipe';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CartComponent,
    CartItemComponent,
    CheckoutComponent,
    WishlistComponent,
    CompareComponent,
    AppendorPipe,
    LoginComponent,
    ProdpageComponent,
    ContactUsComponent,
    FO4Component,
    MobilemenuComponent,
    IntrosectionComponent,
    SwiperContainerComponent,
    CategorySectionComponent,
    PopularDepartmentsComponent,
    StickyFooterComponent,
    NewsletterPopupComponent,
    QuickViewComponent,
    ScrollTopComponent,
    AccountComponent,
    SignupComponent,
    DashboardComponent,
    SortPipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule
  ],
  providers: [
    CategoryService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    SessionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

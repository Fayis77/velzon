import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './module/Layout/header/header.component';
import { FooterComponent } from './module/Layout/footer/footer.component';
import { DashboardComponent } from './module/Pages/dashboard/dashboard.component';
import { CollectioncardComponent } from './module/Pages/collectioncard/collectioncard.component';
import { LeftSidebarComponent } from './module/Pages/left-sidebar/left-sidebar.component';
import { GraphSectionComponent } from './module/Pages/graph-section/graph-section.component';
import { OrderSectionComponent } from './module/Pages/order-section/order-section.component';
import { RightSidebarComponent } from './module/Pages/right-sidebar/right-sidebar.component';
import { SalesSectionComponent } from './module/Pages/sales-section/sales-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CollectioncardComponent,
    LeftSidebarComponent,
    GraphSectionComponent,
    OrderSectionComponent,
    RightSidebarComponent,
    SalesSectionComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

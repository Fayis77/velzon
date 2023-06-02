import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { HeaderComponent } from './Layout/header/header.component';
import { CollectioncardComponent } from './Pages/collectioncard/collectioncard.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { GraphSectionComponent } from './Pages/graph-section/graph-section.component';
import { LeftSidebarComponent } from './Pages/left-sidebar/left-sidebar.component';
import { OrderSectionComponent } from './Pages/order-section/order-section.component';
import { RightSidebarComponent } from './Pages/right-sidebar/right-sidebar.component';
import { SalesSectionComponent } from './Pages/sales-section/sales-section.component';
import { FooterComponent } from './Layout/footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule
  ],

})
export class ModuleModule { }

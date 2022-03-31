import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';


@NgModule({
  declarations: [ HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    NzLayoutModule,
    NzImageModule,
    NzGridModule,
    NzDropDownModule,
    NzIconModule,
    NzButtonModule,
    NzDividerModule,
    NzListModule,
    NzBadgeModule,
    NzCarouselModule
  ],
  exports: [ HomePageComponent]
})
export class HomePageModule { }

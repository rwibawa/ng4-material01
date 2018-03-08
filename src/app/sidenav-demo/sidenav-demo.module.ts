import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavDemoComponent } from './sidenav-demo.component';

import { MatSidenavModule, MatIconModule, MatListModule, MatToolbarModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    CdkTableModule
  ],
  declarations: [SidenavDemoComponent],
  exports: [SidenavDemoComponent]
})
export class SidenavDemoModule { }

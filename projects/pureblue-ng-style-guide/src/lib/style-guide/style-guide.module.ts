import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StyleGuideRoutingModule } from './style-guide-routing.module';
import { MainComponent } from './main/main.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { MiddlePanelComponent } from './middle-panel/middle-panel.component';

@NgModule({
  declarations: [
    MainComponent,
    LeftPanelComponent,
    MiddlePanelComponent,
    RightPanelComponent
  ],
  imports: [
    CommonModule,
    StyleGuideRoutingModule
  ]
})
export class StyleGuideModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { MiddlePanelComponent } from './middle-panel/middle-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';


@NgModule({
  declarations: [
    MainComponent,
    LeftPanelComponent,
    MiddlePanelComponent,
    RightPanelComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AppModule { }

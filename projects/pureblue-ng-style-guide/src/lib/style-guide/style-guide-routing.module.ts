import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { MiddlePanelComponent } from './middle-panel/middle-panel.component';
const routes: Routes = [
  { path: 'main-component', component: MainComponent },
  {
    path: '',
    redirectTo: '/main-component', pathMatch: 'full',
    children: [
      {
        path: 'leftPanel',
        component: LeftPanelComponent,
      },
      {
        path: 'middlePanel',
        component: MiddlePanelComponent,
      },
      {
        path: 'rightPanel',
        component: RightPanelComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StyleGuideRoutingModule { }

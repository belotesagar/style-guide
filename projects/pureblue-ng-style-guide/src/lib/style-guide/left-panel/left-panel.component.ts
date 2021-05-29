import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {



  }
  list={
    button:["Emphasized","High Emphasized"],
    input:[],
    typography:[],
    iconography:[],
    list_view:[],
    grid_view:[]
  }
  rootListArr=Object.keys(this.list);
}

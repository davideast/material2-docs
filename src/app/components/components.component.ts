import { Component, OnInit } from '@angular/core';
import { ComponentListItem, componentList } from './component-list';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
  components: ComponentListItem[];
  constructor() {
    this.components = componentList;
   }

  ngOnInit() {
  }

}

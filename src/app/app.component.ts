import { Component } from '@angular/core';
import { componentList } from './components/component-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './shared/shared.css']
})
export class AppComponent {
  title = 'Angular Material';
  components = componentList;
}

import { Component } from '@angular/core';

@Component({
  selector: 'microsite-hero',
  templateUrl: 'microsite-hero.component.html',
  styleUrls: ['microsite-hero.component.css', '../shared.css']
})
export class MicrositeHeroComponent {
  heroTitle = 'Angular Material';
  heroTagline = 'Material Design components for Angular 2 apps';
  heroCallToAction = 'Preview on GitHub';
  heroCallToActionHref = 'https://github.com/angular/material2/';
  heroLogo = 'assets/material-logo.png';
}

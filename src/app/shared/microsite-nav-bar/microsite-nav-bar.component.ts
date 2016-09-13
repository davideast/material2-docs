import { Component } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon/icon';

@Component({
  selector: 'microsite-nav-bar',
  templateUrl: 'microsite-nav-bar.component.html',
  styleUrls: ['microsite-nav-bar.component.css', '../shared.css'],
  providers: [MdIconRegistry]
})
export class MicrositeNavBarComponent {
  navLogoSrc = 'assets/angular-logo-with-text.svg';
  navTitle = 'Material';
  navCallToAction = 'Preview on GitHub';
  navCallToActionHref = 'https://github.com/angular/material2/'
}

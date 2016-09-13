import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'microsite-footer',
  templateUrl: 'microsite-footer.component.html',
  styleUrls: ['microsite-footer.component.css', '../shared.css']
})
export class MicrositeFooterComponent implements OnInit {

  leftMostItem = {
    imgSrc: 'angular-logo.svg',
    href: 'https://angular.io/',
    text: 'Learn Angular'
  };

  rightMostItem = {
    text: 'Powered by Google ©2010-2016. Code licensed under an MIT-style License. Documentation licensed under CC BY 4.0.'
  };

  constructor() {}

  ngOnInit() {
  }
  
}

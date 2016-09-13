import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'microsite-main-section',
  templateUrl: 'microsite-main-section.component.html',
  styleUrls: ['microsite-main-section.component.css', '../shared.css']
})
export class MicrositeMainSectionComponent implements OnInit {
  features = [
    {
      title: 'Sprint from Zero to App',
      text: 'Hit the ground running with comprehensive, modern UI components that work across web, mobile and desktop.'
    },
    {
      title: 'Fast and Consistent',
      text: 'Finely tuned performance, because every millisecond counts. Fully tested across IE11 and current versions of Chrome, Edge, Firefox, and Safari.'
    },
    {
      title: 'Versatile',
      text: 'Themable, for when you need to stay on-brand or just have a favorite color. Accessible and internationalized so that all users are welcome.'
    },
    {
      title: 'Optimized for Angular',
      text: 'Built by the Angular team to integrate seamlessly with Angular 2.'
    }
  ];

  mainCta = 'Preview on GitHub';
  mainCtaHref = 'https://github.com/angular/material2/';

  constructor() {}

  ngOnInit() {
  }

}

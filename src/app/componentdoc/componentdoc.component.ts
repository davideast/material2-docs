import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { componentDocHash, ComponentDoc, ComponentDocHash } from './componentdoc-list';
import { Converter } from 'showdown';

@Component({
  selector: 'app-componentdoc',
  templateUrl: './componentdoc.component.html',
  styleUrls: ['./componentdoc.component.css', '../shared/shared.css']
})
export class ComponentdocComponent implements OnInit {
  componentDoc: ComponentDoc;
  converter: Converter;
  currentDoc = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.converter = new Converter();
  }

  ngOnInit() {
    this.route.params
      .filter((param: Params, i: number) => {
        return param['selector'] !== this.currentDoc
      })
      .forEach((param: Params) => {
        const selector = param['selector'];
        const doc = componentDocHash[selector] as ComponentDoc;
        const docHtml = this.converter.makeHtml(doc.content);
        this.componentDoc = {
          name: doc.name,
          content: docHtml
        };
      });
  }

}

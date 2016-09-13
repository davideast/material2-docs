import { NgMaterialAngularIoPage } from './app.po';

describe('ng-material-angular-io App', function() {
  let page: NgMaterialAngularIoPage;

  beforeEach(() => {
    page = new NgMaterialAngularIoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

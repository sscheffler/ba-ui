import { BaUiPage } from './app.po';

describe('ba-ui App', function() {
  let page: BaUiPage;

  beforeEach(() => {
    page = new BaUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

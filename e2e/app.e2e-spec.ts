import { EskolappPage } from './app.po';

describe('eskolapp App', () => {
  let page: EskolappPage;

  beforeEach(() => {
    page = new EskolappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

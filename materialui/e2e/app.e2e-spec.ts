import { MaterialuiPage } from './app.po';

describe('materialui App', () => {
  let page: MaterialuiPage;

  beforeEach(() => {
    page = new MaterialuiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

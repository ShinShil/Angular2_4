import { PipesStartPage } from './app.po';

describe('pipes-start App', () => {
  let page: PipesStartPage;

  beforeEach(() => {
    page = new PipesStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

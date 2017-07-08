import { HttpStartPage } from './app.po';

describe('http-start App', () => {
  let page: HttpStartPage;

  beforeEach(() => {
    page = new HttpStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

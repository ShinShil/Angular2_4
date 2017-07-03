import { TemporyPage } from './app.po';

describe('tempory App', () => {
  let page: TemporyPage;

  beforeEach(() => {
    page = new TemporyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

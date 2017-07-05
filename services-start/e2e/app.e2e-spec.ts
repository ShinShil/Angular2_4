import { ServicesStartPage } from './app.po';

describe('services-start App', () => {
  let page: ServicesStartPage;

  beforeEach(() => {
    page = new ServicesStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

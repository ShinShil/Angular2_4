import { RoutingStartPage } from './app.po';

describe('routing-start App', () => {
  let page: RoutingStartPage;

  beforeEach(() => {
    page = new RoutingStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

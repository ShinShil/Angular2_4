import { TestingStartPage } from './app.po';

describe('testing-start App', () => {
  let page: TestingStartPage;

  beforeEach(() => {
    page = new TestingStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

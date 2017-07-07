import { FormsReactiveStartPage } from './app.po';

describe('forms-reactive-start App', () => {
  let page: FormsReactiveStartPage;

  beforeEach(() => {
    page = new FormsReactiveStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

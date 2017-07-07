import { FormsTdStartPage } from './app.po';

describe('forms-td-start App', () => {
  let page: FormsTdStartPage;

  beforeEach(() => {
    page = new FormsTdStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

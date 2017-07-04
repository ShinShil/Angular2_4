import { Debugging1Page } from './app.po';

describe('debugging1 App', () => {
  let page: Debugging1Page;

  beforeEach(() => {
    page = new Debugging1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

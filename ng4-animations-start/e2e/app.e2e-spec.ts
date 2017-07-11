import { Ng4AnimationsStartPage } from './app.po';

describe('ng4-animations-start App', () => {
  let page: Ng4AnimationsStartPage;

  beforeEach(() => {
    page = new Ng4AnimationsStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

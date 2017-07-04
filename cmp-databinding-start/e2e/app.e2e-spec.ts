import { CmpDatabindingStartPage } from './app.po';

describe('cmp-databinding-start App', () => {
  let page: CmpDatabindingStartPage;

  beforeEach(() => {
    page = new CmpDatabindingStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

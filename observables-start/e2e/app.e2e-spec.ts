import { ObservablesStartPage } from './app.po';

describe('observables-start App', () => {
  let page: ObservablesStartPage;

  beforeEach(() => {
    page = new ObservablesStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

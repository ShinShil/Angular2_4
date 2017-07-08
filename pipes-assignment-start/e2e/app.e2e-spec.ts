import { PipesAssignmentStartPage } from './app.po';

describe('pipes-assignment-start App', () => {
  let page: PipesAssignmentStartPage;

  beforeEach(() => {
    page = new PipesAssignmentStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

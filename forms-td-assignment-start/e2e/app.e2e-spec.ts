import { FormsTdAssignmentStartPage } from './app.po';

describe('forms-td-assignment-start App', () => {
  let page: FormsTdAssignmentStartPage;

  beforeEach(() => {
    page = new FormsTdAssignmentStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

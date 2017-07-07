import { FormsReactiveAssignmentStartPage } from './app.po';

describe('forms-reactive-assignment-start App', () => {
  let page: FormsReactiveAssignmentStartPage;

  beforeEach(() => {
    page = new FormsReactiveAssignmentStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

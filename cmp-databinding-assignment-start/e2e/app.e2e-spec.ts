import { CmpDatabindingAssignmentStartPage } from './app.po';

describe('cmp-databinding-assignment-start App', () => {
  let page: CmpDatabindingAssignmentStartPage;

  beforeEach(() => {
    page = new CmpDatabindingAssignmentStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

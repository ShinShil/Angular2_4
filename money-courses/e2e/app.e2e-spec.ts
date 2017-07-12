import { MoneyCoursesPage } from './app.po';

describe('money-courses App', () => {
  let page: MoneyCoursesPage;

  beforeEach(() => {
    page = new MoneyCoursesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

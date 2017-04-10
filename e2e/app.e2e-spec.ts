import { AngularTodoMvcSamplePage } from './app.po';

describe('angular-todo-mvc-sample App', () => {
  let page: AngularTodoMvcSamplePage;

  beforeEach(() => {
    page = new AngularTodoMvcSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

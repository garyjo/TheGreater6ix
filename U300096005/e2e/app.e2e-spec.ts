import { U300096005Page } from './app.po';

describe('u300096005 App', () => {
  let page: U300096005Page;

  beforeEach(() => {
    page = new U300096005Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

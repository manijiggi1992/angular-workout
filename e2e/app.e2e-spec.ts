import { jiggiPage } from './app.po';

describe('jiggi App', function() {
  let page: jiggiPage;

  beforeEach(() => {
    page = new jiggiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { ItekakoOfficesPage } from './app.po';

describe('itekako-offices App', () => {
  let page: ItekakoOfficesPage;

  beforeEach(() => {
    page = new ItekakoOfficesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

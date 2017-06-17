import { RestaurantMenuPage } from './app.po';

describe('restaurant-menu App', () => {
  let page: RestaurantMenuPage;

  beforeEach(() => {
    page = new RestaurantMenuPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { DealsComponent } from './deals/deals.component';
import { routes } from './app.routes';

describe('App routes', () => {
  it('should route /deals to the deals page', () => {
    const dealsRoute = routes.find(route => route.path === 'deals');

    expect(dealsRoute?.component).toBe(DealsComponent);
  });
});

import { newE2EPage } from '@stencil/core/testing';

describe('woolies-app', () => {
  it('renders', async () => {
    const page = await newE2EPage({ url: '/'});
    const element = await page.find('woolies-app');
    expect(element).toHaveClass('hydrated');
  });

  it('renders two woolies-card-lists', async () => {
    const page = await newE2EPage({ url: '/'});
    const element = await page.findAll('woolies-app >>> woolies-card-list');
    expect(element.length).toEqual(2);
  });
});

const newSpecPage = require("@stencil/core/testing").newSpecPage;
const MyComponent = require('stencil-demo-component');

describe('MyComponent Serailization', () => {
  test('Component renders', async () => {
    const page = await newSpecPage({
      components: [MyComponent],
      html: '<my-component></my-component>',
    });

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });
});
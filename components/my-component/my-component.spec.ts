import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';
import { print as printFn, test as testFn } from '../../src/index';

describe('my-component', () => {
  expect.addSnapshotSerializer({
    print(val) {
      return printFn(val);
    },
    test(val) {
      return testFn(val);
    },
  });

  it('renders with no attributes', async () => {
    const page = await newSpecPage({
      components: [MyComponent],
      html: '<my-component></my-component>',
    });
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('renders with 1 attribute', async () => {
    const page = await newSpecPage({
      components: [MyComponent],
      html: '<my-component id="foo"></my-component>',
    });
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('renders with 2 attributes', async () => {
    const page = await newSpecPage({
      components: [MyComponent],
      html: '<my-component id="foo" class="bar"></my-component>',
    });
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('renders with multiple attributes', async () => {
    const page = await newSpecPage({
      components: [MyComponent],
      html: '<my-component id="foo" first="First" middle="Middle" last="Last" data-attr="bar"></my-component>',
    });
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });
});

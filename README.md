# jest-serializer-stencil
A Jest snapshot serializer for Stencil components

[![NPM version](https://badge.fury.io/js/jest-serializer-stencil.svg)](https://npmjs.org/package/jest-serializer-stencil)

This is based on https://github.com/ionic-team/stencil/blob/master/src/testing/jest/jest-serializer.ts
This is intended for teams using Stencil components in other frameworks where it doesn't make sense to use the Stencil CLI to run Jest, e.g. you might be using Stencil components in another framework (Vue, React, etc), you can still get the benefit from Stencil's serializer code for Stencil components.

## Setup
Install with npm:

```
npm install --save-dev jest-serializer-stencil
```

Install with yarn:

```
yarn add --dev jest-serializer-stencil
```

Add it to your Jest config:
```json
"jest": {
  "snapshotSerializers": ["jest-serializer-stencil"]
}
```

## Example Test and Output

### Test Input
```js
// Input
describe('my-component', () => {
  it('renders with multiple attributes', async () => {
    const page = await newSpecPage({
      components: [MyComponent],
      html: '<my-component id="foo" first="First" middle="Middle" last="Last" data-attr="bar"></my-component>',
    });
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });
});
```

### Snapshot output
```html
exports[`my-component renders with multiple attributes 1`] = `
<my-component
  data-attr="bar"
  first="First"
  id="foo"
  last="Last"
  middle="Middle"
>
  <mock:shadow-root>
    <div>
      Hello, World! I'm First Middle Last
    </div>
  </mock:shadow-root>
</my-component>
`;
```

You can view more test cases here:
https://github.com/bjankord/jest-serializer-stencil/blob/main/components/my-component/my-component.spec.ts

You can view the sample snapshot output here:
https://github.com/bjankord/jest-serializer-stencil/blob/main/components/my-component/__snapshots__/my-component.spec.ts.snap

Please refer to the [Jest snapshotSerializers config docs](https://jestjs.io/docs/configuration#snapshotserializers-arraystring) for additional info.

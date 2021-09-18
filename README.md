# jest-serializer-stencil
A Jest snapshot serializer for Stencil components

[![NPM version](https://badge.fury.io/js/jest-serializer-stencil.svg)](https://npmjs.org/package/jest-serializer-stencil)

This is based on https://github.com/ionic-team/stencil/blob/master/src/testing/jest/jest-serializer.ts
This is intended for teams using Stencil components in other frameworks where it doesn't make sense to use the Stencil CLI to run Jest. You can still get the benefit from Stencil's serializer code for Stencil components.

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

Please refer to the [Jest snapshotSerializers config docs](https://jestjs.io/docs/configuration#snapshotserializers-arraystring) for additional info.

## Example

### Given:
```js
function renderElem(props) {
	return `<body>
				<div class="home active">
					<h1><img src="${ props.img }" alt="Foo"/></h1><div>Hello</div>
					<p><span class="something">Hey</span>
					<img src="${ props.img }" /></p>
				</div>
			</body>
	`;
}

expect(renderElem({ img: '/foo.png' })).toMatchSnapshot();
```

### Produces snapshot:
```html
<body>
  <div class="home active">
    <h1>
      <img src="/foo.png" alt="Foo" />
    </h1>
    <div>Hello</div>
    <p>
      <span class="something">Hey</span>
      <img src="/foo.png" />
    </p>
  </div>
</body>
```
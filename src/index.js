const mockDoc = require('@stencil/core/mock-doc/index.cjs');
const toDiffableHTML = require('diffable-html');

const print = (val) => {
  const serializedHTML = mockDoc.serializeNodeToHtml(val, {
    serializeShadowRoot: true,
    prettyHtml: true,
    outerHtml: true,
  });
  return toDiffableHTML(serializedHTML).trim();
};

const test = (val) => {
  if (val !== undefined && val !== null) {
    if (val instanceof HTMLElement || val instanceof mockDoc.MockNode) {
      return true;
    }

    if (typeof val === 'string') {
      console.log('val is a string');
      const trimmed = val.trim();
      return (
        trimmed.length > 2 &&
        trimmed[0] === "<" &&
        trimmed[trimmed.length - 1] === ">"
      );
    }
  }

  return false;
}

module.exports = {
  print,
  test,
};

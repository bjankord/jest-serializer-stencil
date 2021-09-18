const mockDoc = require("@stencil/core/mock-doc/index.cjs");

const print = (val) =>
  mockDoc.serializeNodeToHtml(val, {
    serializeShadowRoot: true,
    prettyHtml: true,
    outerHtml: true,
  });
const test = (val) =>
  val !== undefined &&
  val !== null &&
  (val instanceof HTMLElement || val instanceof mockDoc.MockNode);

module.exports = {
  print,
  test,
};

module.exports = {
  testEnvironment: "jsdom",
  snapshotSerializers: ["./dist/cjs/index"],
  testMatch: [
    "**/tests/**/*.spec.[jt]s?(x)",
  ],
};

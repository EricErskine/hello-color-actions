const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World to Jason from Eric's repo for module 4 CI/CD!");
  });
});

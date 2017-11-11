require("chai").should();
const config = require("../src/config");

describe("Config:", () => {
  it("GIT_BASE_URI should be JSTreats repo", () => {
    config.GIT_BASE_URI.should.equal("https://github.com/jstreats");
  });
});

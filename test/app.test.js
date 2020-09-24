const { request, expect } = require("./helper");

const app = require("../src/app");

describe("app", () => {
  it("responds with a not found message", (done) => {
    request(app)
      .get("/what-is-this-even")
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res).to.be.json;
        done(err);
      });
  });
});

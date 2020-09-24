const { request, expect } = require("./helper");

const app = require("../src/app");

describe("GET /", () => {
  it("responds with a json message", (done) => {
    request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body)
          .to.have.property("message")
          .to.match(/API for /);
        done(err);
      });
  });
});

describe("POST /images", () => {
  it("responds with a json message", (done) => {
    request(app)
      .post("/images")
      .end((err, res) => {
        expect(res).to.have.status(200);
        done(err);
      });
  });
});

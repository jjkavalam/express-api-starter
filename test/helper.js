const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

module.exports = {
  request,
  expect,
};

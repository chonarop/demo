process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');

let server = require('../index');
let should = chai.should();

var expect = require('chai').expect;

chai.use(chaiHttp);

describe('/GET simplenode without message', () => {
  it('it should return hello world', (done) => {
    chai.request(server)
    .get('/')
    .end((err, res) => {
      res.should.have.status(200);
      res.text.should.equal('Hello World!');
      done();
    });

  });

});

describe('/GET simplenode with message', () => {
  it('it should return hello world', (done) => {
    chai.request(server)
    .get('/?msg=some text')
    .end((err, res) => {
      res.should.have.status(200);
      res.text.should.contain('some text');
      done();
    });

  });

});

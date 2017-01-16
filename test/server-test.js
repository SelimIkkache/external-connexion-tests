// Test the server http.
const chai = require('chai')
const expect = chai.expect
const should = chai.should()
const server = require('../lib/server')

chai.use(require('chai-http'))

describe ('Server', () => {
  it('should be up and running', (done) => {
    chai.request(server)
      .get('/')
      .end((err,res) => {
        expect(err).to.be.null
        expect(res).to.have.status(200)
        done()
      })
  })
  it('should lands on the landing page')
  it('should responds in less than 100ms')
})

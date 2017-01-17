//Test for the connection page
// Selenium & Chai
require('chromedriver')
const webdriver = require('selenium-webdriver')
const By = webdriver.By
const until = webdriver.until
var selDriver = new webdriver.Builder()
  .forBrowser('chrome')
  .build()

const chai = require('chai')
const expect = chai.expect
const should = chai.should()
const server = require('../lib/server')
chai.use(require('chai-http'))
chai.use(require("chai-webdriver")(selDriver))

describe ('Landing Page', () => {
  // Run the server
  it ('should be the connection page', () => {
    selDriver.get('http://localhost:8888/')
    .then (selDriver.findElement(By.id('13a5d1ea-88a4-4058-97e0-b3e5af991baa'))
    )
  })

  it('should have a google connection button')
})

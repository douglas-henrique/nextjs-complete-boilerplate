const { page, component } = require('./settings')

module.exports = function (plop) {
  plop.setGenerator('page', page)
  plop.setGenerator('component', component)
}
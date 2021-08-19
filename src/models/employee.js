// External Dependancies
const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
  name: 'String',
  age: 'Number'
})

module.exports = mongoose.model('Employee', employeeSchema)

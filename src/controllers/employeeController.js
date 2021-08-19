// External Dependancies
const boom = require('boom')

// Get Data Models
const Employee = require('../models/employee')
const sendType = require('../utils/sendType')
// Get all cars
exports.getEmployees = async (req, reply) => {
  try {
    const { pageSize, currentPage, query } = req.body
    const current = currentPage > 0 ? currentPage - 1 : 0
    await Employee.estimatedDocumentCount({}, async (err, count) => {
      const rets = await Employee.find(query)
        .skip(current * pageSize)
        .limit(pageSize)
      const data = {
        list: rets,
        pagination: {
          currentPage,
          pageSize,
          total: count
        }
      }
      reply.send(sendType(data))
    })
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single employee by ID
exports.getSingleEmployee = async (req, reply) => {
  try {
    const id = req.query._id
    const employee = await Employee.findById(id)
    return sendType(employee)
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new employee
exports.addEmployee = async (req, reply) => {
  try {
    const employee = new Employee(req.body)
    return sendType(employee.save())
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing employee
exports.updateEmployee = async (req, reply) => {
  try {
    const employee = req.body
    const { _id, ...updateData } = employee
    const update = await Employee.findByIdAndUpdate(_id, updateData, {
      new: true
    })
    return sendType(update)
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a employee
exports.deleteEmployee = async (req, reply) => {
  try {
    const id = req.body._id
    const employee = await Employee.findByIdAndRemove(id)
    return sendType(employee)
  } catch (err) {
    throw boom.boomify(err)
  }
}

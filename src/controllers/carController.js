// External Dependancies
const boom = require('boom')

// Get Data Models
const Car = require('../models/Car')
const sendType=require('../utils/sendType')
// Get all cars
exports.getCars = async (req, reply) => {
  try {
    const {pageSize,currentPage,query}=req.body
    const current=currentPage>0?currentPage-1:0
    await Car.estimatedDocumentCount({},async (err,count)=>{
    const rets = await Car.find(query).skip(current*pageSize).limit(pageSize)
    const data={
      list:rets,
      pagination:{
        currentPage,
        pageSize,
        total:count
      }
    }
     reply.send(sendType(data))
    })
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single car by ID
exports.getSingleCar = async (req, reply) => {
  try {
    const id = req.query._id
    const car = await Car.findById(id)
    return sendType(car)
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new car
exports.addCar = async (req, reply) => {
  try {
    const car = new Car(req.body)
    return sendType(car.save())
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing car
exports.updateCar = async (req, reply) => {
  try {
    const car = req.body
    const { _id,...updateData } = car
    const update = await Car.findByIdAndUpdate(_id, updateData, { new: true })
    return sendType(update)
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a car
exports.deleteCar = async (req, reply) => {
  try {
    const id = req.body._id
    const car = await Car.findByIdAndRemove(id)
    return sendType(car)
  } catch (err) {
    throw boom.boomify(err)
  }
}
// External Dependancies
const boom = require('boom')

// Get Data Models
const Car = require('../models/Car')

// Get all cars
exports.getCars = async (req, reply) => {
  try {
    const {pageSize,currentPage,query}=req.body
    await Car.estimatedDocumentCount({},async (err,count)=>{
    const rets = await Car.find(query).skip(currentPage*pageSize).limit(pageSize)
    const data={
      list:rets,
      pagination:{
        currentPage,
        pageSize,
        total:count
      }
    }
    reply.send(data)
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
    return car
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new car
exports.addCar = async (req, reply) => {
  try {
    const car = new Car(req.body)
    return car.save()
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
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a car
exports.deleteCar = async (req, reply) => {
  try {
    const id = req.body.id
    const car = await Car.findByIdAndRemove(id)
    return car
  } catch (err) {
    throw boom.boomify(err)
  }
}
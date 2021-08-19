// External Dependancies
const boom = require('boom')

// Get Data Models
const <%= firstUpperCase(data.moduleId) %> = require('../models/<%= data.moduleId %>')
const sendType=require('../utils/sendType')
// Get all cars
exports.get<%= firstUpperCase(data.moduleId) %>s = async (req, reply) => {
  try {
    const {pageSize,currentPage,query}=req.body
    const current=currentPage>0?currentPage-1:0
    await <%= firstUpperCase(data.moduleId) %>.estimatedDocumentCount({},async (err,count)=>{
    const rets = await <%= firstUpperCase(data.moduleId) %>.find(query).skip(current*pageSize).limit(pageSize)
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

// Get single <%= data.moduleId %> by ID
exports.getSingle<%= firstUpperCase(data.moduleId) %> = async (req, reply) => {
  try {
    const id = req.query._id
    const <%= data.moduleId %> = await <%= firstUpperCase(data.moduleId) %>.findById(id)
    return sendType(<%= data.moduleId %>)
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new <%= data.moduleId %>
exports.add<%= firstUpperCase(data.moduleId) %> = async (req, reply) => {
  try {
    const <%= data.moduleId %> = new <%= firstUpperCase(data.moduleId) %>(req.body)
    return sendType(<%= data.moduleId %>.save())
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing <%= data.moduleId %>
exports.update<%= firstUpperCase(data.moduleId) %> = async (req, reply) => {
  try {
    const <%= data.moduleId %> = req.body
    const { _id,...updateData } = <%= data.moduleId %>
    const update = await <%= firstUpperCase(data.moduleId) %>.findByIdAndUpdate(_id, updateData, { new: true })
    return sendType(update)
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a <%= data.moduleId %>
exports.delete<%= firstUpperCase(data.moduleId) %> = async (req, reply) => {
  try {
    const id = req.body._id
    const <%= data.moduleId %> = await <%= firstUpperCase(data.moduleId) %>.findByIdAndRemove(id)
    return sendType(<%= data.moduleId %>)
  } catch (err) {
    throw boom.boomify(err)
  }
}
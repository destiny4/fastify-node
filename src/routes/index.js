// Import our Controllers
const carController = require('../controllers/carController')
// const carSchema=carController.carSchema
const routes = [
  {
    method: 'POST',
    url: '/cars/getByPage',
    handler: carController.getCars
  },
  {
    method: 'GET',
    url: '/cars/getById',
    handler: carController.getSingleCar
  },
  {
    method: 'POST',
    url: '/cars/insert',
    handler: carController.addCar,
    schema:{
      description: '新增车辆',
      tags: ['Cars'],
      body: {
       type: 'object',
       properties: {
         title: {type:'string'},
         brand: {type:'string'},
         price: {type:'string'},
         age:{type:'number'}
       }
      }
    }
  },
  {
    method: 'POST',
    url: '/cars/updateById',
    handler: carController.updateCar
  },
  {
    method: 'POST',
    url: '/cars/deleteById',
    handler: carController.deleteCar
  }
]

module.exports = routes
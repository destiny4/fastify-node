const carController = require('../controllers/carController')

const car = [
  {
    method: 'POST',
    url: '/cars/getByPage',
    handler: carController.getCars,
    schema: {
      description: '查询车辆',
      tags: ['Car'],
      body: {
        type: 'object',
        properties: {
          currentPage: { type: 'number' },
          pageSize: { type: 'number' },
          query: {
            type: 'object',
            properties:{
              title: { type: 'string' },
              brand: { type: 'string' },
              price: { type: 'string' },
              age: { type: 'number' }
            }
          }
        }
      }
    }
  },
  {
    method: 'GET',
    url: '/cars/getById',
    handler: carController.getSingleCar,
    schema: {
      description: '新增车辆',
      tags: ['Car'],
      querystring: {
        type: 'object',
        properties: {
          _id: { type: 'string' }
        }
      }
    }
  },
  {
    method: 'POST',
    url: '/cars/insert',
    handler: carController.addCar,
    schema: {
      description: '新增车辆',
      tags: ['Car'],
      body: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          brand: { type: 'string' },
          price: { type: 'string' },
          age: { type: 'number' }
        }
      }
    }
  },
  {
    method: 'POST',
    url: '/cars/updateById',
    handler: carController.updateCar,
    schema: {
      description: '新增车辆',
      tags: ['Car'],
      body: {
        type: 'object',
        properties: {
          _id: { type: 'string' },
          title: { type: 'string' },
          brand: { type: 'string' },
          price: { type: 'string' },
          age: { type: 'number' }
        }
      }
    }
  },
  {
    method: 'POST',
    url: '/cars/deleteById',
    handler: carController.deleteCar,
    schema: {
      description: '新增车辆',
      tags: ['Car'],
      body: {
        type: 'object',
        properties: {
          _id: { type: 'string' }
        }
      }
    }
  }
]

module.exports = car

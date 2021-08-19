const employeeController = require('../controllers/employeeController')

const employee = [
  {
    method: 'POST',
    url: '/employee/getByPage',
    handler: employeeController.getEmployees,
    schema: {
      description: '查询职工',
      tags: ['Employee'],
      body: {
        type: 'object',
        properties: {
          currentPage: { type: 'number' },
          pageSize: { type: 'number' },
          query: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              age: { type: 'number' }
            }
          }
        }
      }
    }
  },
  {
    method: 'GET',
    url: '/employee/getById',
    handler: employeeController.getSingleEmployee,
    schema: {
      description: '新增职工',
      tags: ['Employee'],
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
    url: '/employee/insert',
    handler: employeeController.addEmployee,
    schema: {
      description: '新增职工',
      tags: ['Employee'],
      body: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          age: { type: 'number' }
        }
      }
    }
  },
  {
    method: 'POST',
    url: '/employee/updateById',
    handler: employeeController.updateEmployee,
    schema: {
      description: '新增职工',
      tags: ['Employee'],
      body: {
        type: 'object',
        properties: {
          _id: { type: 'string' },
          name: { type: 'string' },
          age: { type: 'number' }
        }
      }
    }
  },
  {
    method: 'POST',
    url: '/employee/deleteById',
    handler: employeeController.deleteEmployee,
    schema: {
      description: '新增职工',
      tags: ['Employee'],
      body: {
        type: 'object',
        properties: {
          _id: { type: 'string' }
        }
      }
    }
  }
]

module.exports = employee

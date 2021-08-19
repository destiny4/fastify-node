const <%= data.moduleId %>Controller = require('../controllers/<%= data.moduleId %>Controller')

const <%= data.moduleId %> = [
  {
    method: 'POST',
    url: '/<%= data.moduleId %>/getByPage',
    handler: <%= data.moduleId %>Controller.get<%= firstUpperCase(data.moduleId) %>s,
    schema: {
      description: '查询<%= data.moduleName %>',
      tags: ['<%= firstUpperCase(data.moduleId) %>'],
      body: {
        type: 'object',
        properties: {
          currentPage: { type: 'number' },
          pageSize: { type: 'number' },
          query: {
            type: 'object',
            properties:{
              <% data.table.forEach(function(item){ -%>
                <%= item.id %>: { type: '<%= item.type %>' },
              <% }); %>
            }
          }
        }
      }
    }
  },
  {
    method: 'GET',
    url: '/<%= data.moduleId %>/getById',
    handler: <%= data.moduleId %>Controller.getSingle<%= firstUpperCase(data.moduleId) %>,
    schema: {
      description: '新增<%= data.moduleName %>',
      tags: ['<%= firstUpperCase(data.moduleId) %>'],
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
    url: '/<%= data.moduleId %>/insert',
    handler: <%= data.moduleId %>Controller.add<%= firstUpperCase(data.moduleId) %>,
    schema: {
      description: '新增<%= data.moduleName %>',
      tags: ['<%= firstUpperCase(data.moduleId) %>'],
      body: {
        type: 'object',
        properties: {
          <% data.table.forEach(function(item){ -%>
            <%= item.id %>: { type: '<%= item.type %>' },
          <% }); %>
        }
      }
    }
  },
  {
    method: 'POST',
    url: '/<%= data.moduleId %>/updateById',
    handler: <%= data.moduleId %>Controller.update<%= firstUpperCase(data.moduleId) %>,
    schema: {
      description: '新增<%= data.moduleName %>',
      tags: ['<%= firstUpperCase(data.moduleId) %>'],
      body: {
        type: 'object',
        properties: {
          _id: { type: 'string' },
          <% data.table.forEach(function(item){ -%>
            <%= item.id %>: { type: '<%= item.type %>' },
          <% }); %>
        }
      }
    }
  },
  {
    method: 'POST',
    url: '/<%= data.moduleId %>/deleteById',
    handler: <%= data.moduleId %>Controller.delete<%= firstUpperCase(data.moduleId) %>,
    schema: {
      description: '新增<%= data.moduleName %>',
      tags: ['<%= firstUpperCase(data.moduleId) %>'],
      body: {
        type: 'object',
        properties: {
          _id: { type: 'string' }
        }
      }
    }
  }
]

module.exports = <%= data.moduleId %>

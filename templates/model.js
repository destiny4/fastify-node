// External Dependancies
const mongoose = require('mongoose')

const <%= data.moduleId %>Schema = new mongoose.Schema({
  <% data.table.forEach(function(item){ -%>
    <%= item.id %>: '<%= firstUpperCase(item.type) %>',
  <% }); %>
})

module.exports = mongoose.model('<%= firstUpperCase(data.moduleId) %>', <%= data.moduleId %>Schema)
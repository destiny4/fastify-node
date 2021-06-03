const fastify = require('fastify')({
    logger: true
  })
const mongoose = require('mongoose')
const routes = require('./routes')
const swaggerOption = require('./config/swagger')

mongoose.set('useFindAndModify', false);
fastify.register(require('fastify-swagger'), swaggerOption)

routes.forEach((route, index) => {
    fastify.route(route)
   })

mongoose.connect('mongodb://localhost/mycargarage',{ useNewUrlParser: true ,useUnifiedTopology:true})
 .then(() => console.log('MongoDB connected…'))
 .catch(err => console.log(err))  

  const start = async () => {
    try {
      await fastify.listen(3000)
      fastify.swagger()
      fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()

  fastify.addHook('onSend', (request, reply, payload, done) => {
    const err = null;
    const retObj=JSON.parse(payload)
    let newPayLoad=payload
    if(retObj.error){
      newPayLoad = payload.replace('message', 'msg')
      newPayLoad = newPayLoad.replace('statusCode', 'code')
    }
    else{
      const tmpObj={
        code:0,
        data:retObj,
        msg:'OK'
      }
      newPayLoad=JSON.stringify(tmpObj)
    }
    done(err, newPayLoad)
  })
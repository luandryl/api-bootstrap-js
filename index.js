import express from 'express'
import area from './routes/area'
let app = express()
app.set('port', (process.env.PORT || 5000))

app.use('/', area)

var port = process.env.PORT || 5000;

app.listen(port);
console.log('server started '+ port);

export default app
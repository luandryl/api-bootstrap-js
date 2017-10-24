import express from 'express'
import path from 'path'
import serverStatic from 'serve-static'
import area from './routes/area'
const app = express()

var port =  process.env.PORT || 5000

app.use('/area', area)
app.get('/', function(req, res) {
    res.json({
        'msg': 'welcome'
    })
})


app.listen(port, function () {
	console.log("Running on port: ", port)
})


export default app
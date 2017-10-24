/** Express Server
 * @module Index
 * @requires express
 */
/**
 * express module
 * @const
 */
import express from 'express'
/**
 * path module
 * @const
 */
import path from 'path'
/**
 * server Static module
 * @const
 */
import serverStatic from 'serve-static'
/**
 * Area Router module
 * @const
 */
import area from './routes/area'
/**
 * Express server.
 * @type {object}
 * @const
 */
const app = express()
/**
 * Server Port.
 * @type {number}
 * @const
 */
var port =  process.env.PORT || 5000

/**
 * Use the area router.
 * @function
 */
app.use('/area', area)

/**
 * Welcome route.
 * @name /index/
 * @function
 */
app.get('/', function(req, res) {
    res.json({
        'msg': 'welcome'
    })
})
/**
 * Server Start.
 * @function
 */
app.listen(port, function () {
	console.log("Running on port: ", port)
})


export default app
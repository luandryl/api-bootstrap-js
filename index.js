import express from 'express'
import area from './routes/area'
let app = express()

app.use('/', area)

app.listen(process.env.PORT || 3000, () => {
	console.log(process.env.PORT || 3000)
})

export default app
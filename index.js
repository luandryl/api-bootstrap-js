import express from 'express'

let app = express()

app.get('/', (req, res) => {
	res.send('Hello es6')
})

app.listen(3000, () => {
	console.log('Listening on 3000')
})

export default app
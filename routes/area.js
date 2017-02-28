import express from 'express'
import Circle from '../geometrics/Circle'
import Square from '../geometrics/Square'
import Triangle from '../geometrics/Triangle'

let router = express.Router()

router.get('/', (req, res) => {
	let info = {
		"Welcome": "Bem vindo a API de calculo de Areas",
		"options": {
			"/circle/{raio}": "calcula a area de um circulo com o raio passado por parametro",
			"/square/{side}/": "calcula a area do quadrado",
			"/tri/{base}/{height}": "area do triangulo"
		}
	}
	res.send(info)
})

router.get('/circle/:raio', (req, res) => {
	let c = new Circle(req.params.raio)
	res.send(c.area().toString())
})

router.get('/square/:side', (req, res) => {
	let s = new Square(req.params.side)
	res.send(s.area().toString())
})

router.get('/tri/:base/:height', (req, res) => {
	let t = new Triangle(req.params.base, req.params.height)
	res.send(t.area().toString())
})

export default router
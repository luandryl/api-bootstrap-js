/** Express router providing Area related routes
 * @module Routes/Area
 * @requires express
 */
'use strict'
/**
 * express module
 * @const
 */
import express from 'express'
/**
 * Circle module
 * @const
 */
import Circle from '../geometrics/Circle'
/**
 * Square module
 * @const
 */
import Square from '../geometrics/Square'
/**
 * Circle Triangle
 * @const
 */
import Triangle from '../geometrics/Triangle'

/**
 * Express router to mount user related functions on.
 * @type {object}
 * @const
 */
let router = express.Router()
/**
 * Welcome route.
 * @name /index/
 * @function
 */
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
/**
 * Calculate the area of circle
 * @name /circle/:raio
 * @function
 * @param {string} radius - Radius Value
 * @return {callback} Area result.
 */
router.get('/circle/:raio', (req, res) => {
	let c = new Circle(req.params.raio)
	res.send(c.area().toString())
})
/**
 * Calculate the area of square
 * @name /square/:side
 * @function
 * @param {string} side - Side lenght value
 * @return {callback} Area result.
 */
router.get('/square/:side', (req, res) => {
	let s = new Square(req.params.side)
	res.send(s.area().toString())
})
/**
 * Calculate the area of triangle
 * @name /tri/:base/:height
 * @function
 * @param {string} base - Base lenght.
 * @param {string} height - Height lenght.
 * @return {callback} Area result.
 */
router.get('/tri/:base/:height', (req, res) => {
	let t = new Triangle(req.params.base, req.params.height)
	res.send(t.area().toString())
})

export default router
'use strict'
export default class Circle {
	constructor (raio) {
		this.raio = raio
	}
	
	area () {
		return this.raio * 3.1415
	}
}
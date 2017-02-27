'use strict'
export default class Triangle {
	constructor (base, height) {
		this.base = base
		this.height = height
	}

	area () {
		return .5 * (this.base * this.height)
	}
}
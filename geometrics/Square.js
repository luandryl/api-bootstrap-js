'use strict'
export default class Square {
	constructor (sideLength) {
		if (sideLength < 0) {
			throw new Error({'Size':'Side it should be > 0'})
		} else {
			this.sideLength = sideLength
		}
	}

	area () {
		return this.sideLength * this.sideLength
	}
}
/**
 * Class module for calculate the area of squares.
 * @module Square
 */
'use strict'
export default class Square {
	/**
	 * Create a square.
	 * Has no negative area, if the value of
	 * sideLength is negative it should throw a arror
	 * @constructor
	 * @param {number} sideLength - The side length of square.
	 */
	constructor (sideLength) {
		if (sideLength < 0) {
			throw new Error({'Size':'Side it should be > 0'})
		} else {
			this.sideLength = sideLength
		}
	}
	/**
	 * Calculate the area.
	 * @return {number} the area of cricle.
	 */
	area () {
		return this.sideLength * this.sideLength
	}
}
/**
 * Class module for calculate the area of triangles.
 * @module Triangle
 */
'use strict'
export default class Triangle {
	/**
	 * Create a triangle.
	 * @constructor
	 * @param {number} base - The base value of triangle.
	 * @param {number} height - The base height of triangle.
	 */
	constructor (base, height) {
		this.base = base
		this.height = height
	}
	/**
	 * Calculate the area.
	 * @return {number} the area of triangle.
	 */
	area () {
		return .5 * (this.base * this.height)
	}
}
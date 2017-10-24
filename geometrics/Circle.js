/**
 * Class module for calculate the area of circles.
 * @module Circle
 */
'use strict'
export default class Circle {
	/**
	 * Create a circle.
	 * @constructor
	 * @param {number} radius - The radius of circumference.
	 */
	constructor (raio) {
		this.raio = raio
	}
	/**
	 * Calculate the area.
	 * @return {number} the area of circumference.
	 */
	area () {
		return this.raio * 3.1415
	}
}
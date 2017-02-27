import chai from 'chai'
import Circle from '../geometrics/Circle'

chai.should()

describe('Circle', () => {
	let circle

	beforeEach(() => {
		circle = new Circle(1)
	})

	it('Compute Circle Area', () => {
		circle.area().should.equal(3.1415)
	})
})
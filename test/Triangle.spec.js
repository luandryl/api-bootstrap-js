import chai from 'chai'
import Triangle from '../geometrics/Triangle'

chai.should()

describe('Triangle', () => {
	let tri

	beforeEach(() => {
		tri = new Triangle(2, 4)
	})

	it('Compute Area Triangle', () => {
		tri.area().should.equal(4)
	})
})
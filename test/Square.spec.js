import chai from 'chai'
import Square from '../geometrics/Square'

chai.should()

describe('Square', () => {
	let square

	beforeEach(() => {
		square = new Square(2)
	})

	it('Compute Square Area', () => {
		square.area().should.equal(4)
	})
})
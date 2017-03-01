import chai from 'chai'
import http from 'http'
import '../routes/area'

chai.should()

describe('Area route Get', () => {

	it('Should return 200', (done) => {
		http.get('http://localhost:3000/', (res) => {
			res.statusCode.should.equal(200)
			done()
		})
	})

})
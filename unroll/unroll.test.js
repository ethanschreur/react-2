const unroll = require('./unroll');

describe('#unroll', function() {
	it('is a function', function() {
		expect(typeof unroll).toEqual('function');
		let expectedRet = [ 1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10 ];
		unroll([ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ], [ 13, 14, 15, 16 ] ]).forEach((item, ind) => {
			expect(item).toEqual(expectedRet[ind]);
		});
		expectedRet = [ 'a', 'b', 'c', 'f', 'i', 'h', 'g', 'd', 'e' ];
		unroll([ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ], [ 'g', 'h', 'i' ] ]).forEach((item, ind) => {
			expect(item).toEqual(expectedRet[ind]);
		});
	});
});

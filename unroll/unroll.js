function unroll(squareArray) {
	let newList = [];
	const removeFirstRow = (arr) => {
		[ ...arr.shift() ].forEach((item) => {
			newList.push(item);
		});
		return arr;
	};
	const removeLastColumn = (arr) => {
		arr = arr.map((item) => {
			newList.push(item.pop());
			return item;
		});
		return arr;
	};
	const removeLastRow = (arr) => {
		[ ...arr.pop() ].reverse().forEach((item) => {
			newList.push(item);
		});
		return arr;
	};
	const removeFirstColumn = (arr) => {
		arr.reverse().map((item) => {
			newList.push(item.shift());
			return item;
		});
		return arr.reverse();
	};

	let iteration = 1;

	while (squareArray.length) {
		if (iteration % 4 === 1) {
			squareArray = removeFirstRow(squareArray);
		}
		if (iteration % 4 === 2) {
			squareArray = removeLastColumn(squareArray);
		}
		if (iteration % 4 === 3) {
			squareArray = removeLastRow(squareArray);
		}
		if (iteration % 4 === 0) {
			squareArray = removeFirstColumn(squareArray);
		}
		iteration++;
	}
	return newList;
}

module.exports = unroll;

//Binding

const roomDimensions = {
	width: 50,
	length: 100,
	getArea: function() {
 	let surface = this.width * this.length;
 	return surface;
	}
};

// Bind the roomDimensions object to the getArea function
const boundGetArea = roomDimensions.getArea.bind(roomDimensions);

// Now boundGetArea is a function where 'this' refers to roomDimensions

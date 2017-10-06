import mojs from 'mo-js';
import MojsPlayer from 'mojs-player';

var rect1 = new mojs.Shape({
	parent: '#mojs-container',
	shape: 'rect',
	y: {[-300] : 0},
	duration: 1000,
});

new MojsPlayer({add: rect1});
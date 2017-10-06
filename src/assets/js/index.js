import mojs from 'mo-js';
import MojsPlayer from 'mojs-player';
import MojsCurveEditor from 'mojs-curve-editor';

const yCurve = new MojsCurveEditor({name: 'yoffset'});

const rect1 = new mojs.Shape({
	parent: '#mojs-container',
	shape: 'rect',
	y: {[-300] : -300, curve: yCurve.getEasing()},
	duration: 1000,
});

new MojsPlayer({add: rect1});
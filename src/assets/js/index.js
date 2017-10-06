import mojs from 'mo-js';
import MojsPlayer from 'mojs-player';
import MojsCurveEditor from 'mojs-curve-editor';

const yCurve = new MojsCurveEditor({name: 'yoffset'});
const scaleCurve = new MojsCurveEditor({name: 'scale'});
const angleCurve = new MojsCurveEditor({name: 'angle'});
const originCurve = new MojsCurveEditor({name: 'origin'});

const rect1 = new mojs.Html({
	el: '#js-el',
	shape: 'rect',
	y: {[-300] : -300, curve: yCurve.getEasing()},
	scaleX: {1 : 1, curve: scaleCurve.getEasing()},
	scaleY: {1 : 1, curve: scaleCurve.getEasing({
			transform: (k) => (1 + (1-k)/1.5)
		})
	},
	angle: {90 : 90, curve: angleCurve.getEasing()},
	origin: {100 : 100, curve: originCurve.getEasing()},
	duration: 1000,
});

const rect2 = new mojs.Html({
	el: '#js-el-small',
	shape: 'rect',
	y: {[-300] : -300, curve: yCurve.getEasing()},
	scaleX: {1 : 1, curve: scaleCurve.getEasing()},
	scaleY: {1 : 1, curve: scaleCurve.getEasing({
			transform: (k) => (1 + (1-k)/1.5)
		})
	},
	angle: {90 : 90, curve: angleCurve.getEasing()},
	origin: {100 : 100, curve: originCurve.getEasing()},
	duration: 1000,
});

const timeline = new mojs.Timeline();
timeline.add(rect1, rect2);

new MojsPlayer({add: Timeline });
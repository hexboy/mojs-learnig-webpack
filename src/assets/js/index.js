import mojs from 'mo-js';
import MojsPlayer from 'mojs-player';
import MojsCurveEditor from 'mojs-curve-editor';
/*
// const yCurve = new MojsCurveEditor({name: 'yoffset'});
// const scaleCurve = new MojsCurveEditor({name: 'scale'});
// const angleCurve = new MojsCurveEditor({name: 'angle'});
// const originCurve = new MojsCurveEditor({name: 'origin'});
// const ySmall= new MojsCurveEditor({name: 'ySmall'});

const scalePath = new mojs.easing.path('M0, 0 C0, 0 35, 0 35, 0 C35, 0 35.71669838444851, -99.73745931316175 50, -100 C64.2833016155515, -100.26254068683822 65, 0 65, 0 C65, 0 100, 0 100, 0');

const CUSTOM_PROPERTISE = {
	originY: 50,
	draw(el, props) {
		el.style.transformOrigin = `50% ${props.originY}%`;
	}
}

const SQUARE_OPTS = {
	customeProperties: CUSTOM_PROPERTISE,
	y: {
		[-200]: -200, curve: 'M0, 0 C19.60066188766373, -0.10152544552210371 35.39476930668638, -2.5714285714285716 35, 100 C49.285714285714285, 100 50.714285714285715, 100 65, 100 C65.986923266716, 3.4285714285714284 80.39933811233627, 0.6729540169506716 100, 0' },
	scaleX: { 1: 1, curve: scalePath },
	scaleY: {
		1: 1,
		curve: function(k) { return 1 + (1 - scalePath(k)) / 1.5 }
	},
	// originY: {100 : 100, curve: originCurve.getEasing()},
	originY: { 100: 100, curve: 'M0, 100 C0, 100 35, 100 35, 100 C35, 100 35, 50 35, 50 C35, 50 59.245459728975085, 50.326186988367034 75, 50 C77.88325314231204, 76.53095586877582 79.20540524754719, 98.38723973123639 100, 100' },
	duration: 1000,
}

const rect1 = new mojs.Html({
	...SQUARE_OPTS,
	el: '#js-el',
	shape: 'rect',
	angleZ: { 90: 90, curve: 'M0, 100 C0, 100 35, 0 35, 0 C35, 0 35, 100 35, 100 C35, 100 65, 100 65, 100 C65, 100 100, 0 100, 0' },
});

const rect2 = new mojs.Html({
	...SQUARE_OPTS,
	el: '#js-el-small',
	shape: 'rect',
	y: {
		[-300]: -300, curve: 'M0, 0 C0, 0 34.52460185405278, -26.571428571428587 35, 72.85714285714286 C35.80817684811031, 91.42857142857143 42.53624910862847, 93.14285714285712 50, 92.85714285714286 C57.46375089137153, 92.57142857142858 63.02800919306811, 93.58994673825123 65, 72.28571428571429 C65.35118208492932, -29.58994673825123 100, 0 100, 0' },
	angleZ: {
		[-90]: -90, curve: 'M0, 100 C0, 100 35, 0 35, 0 C35, 0 35, 100 35, 100 C35, 100 65, 100 65, 100 C65, 100 100, 0 100, 0' },
});

const dust1 = new mojs.Burst({
	parent: '#js-scene',
	degree: 10,
	angle: { 90: 10, easing: 'cubic.inout' },
	x: { 0: 150, easing: 'cubic.in' },
	radius: { 0: 150 },
	count: 5,
	top: '100%',
	left: '0%',
	timeline: { speed: 0.75 },
	children: {
		radius: 'rand(12, 18)',
		direction: 1,
		pathScale: 'rand(0.5, 0.75)',
		scale: { 1: 0, easing: 'cubic.inout' },
		isSwirl: true,
		swrilSize: 'rand(10, 17)',
		swrilFrequency: 'rand(2, 4)',
		duration: 'stagger(300, 35)',
		delay: 235,
	}
});
const timeline = new mojs.Timeline();
timeline.add(rect1, rect2);

new MojsPlayer({ add: timeline });
*/
const DURATION = 1000;

const scalePath = mojs.easing.path('M0, 0 C0, 0 16.857142857142854, -5.248486282060085e-15 31.142857142857142, 0 C30.80272108843543, -113.14285714285715 50, -100 50, -100 C50, -100 65.31357300419697, -100.13604825191986 70, -0.2857142857142857 C84.28506645158541, -0.14966603379441404 100, 0 100, 0 ');

const CUTSOM_PROPERTIES = {
	originY: 50,
	draw(el, props) {
		el.style.transformOrigin = `50% ${props.originY}%`;
	}
}

const SQUARE_OPTS = {
	customProperties: CUTSOM_PROPERTIES,
	y: {
		[-200]: -200, curve: 'M0, 0 C16.815811159807826, -3.2443825883792443 27.57166399691211, 35.51058598192055 30, 100 C31.90230129013731, 99.91798544665086 67.88545167517314, 99.9146334942176 70, 100 C72.54311975339816, 46.08536650578238 87.89847455447789, 2.672954016950679 100, 0 ' },
	scaleX: { 1: 1, curve: scalePath },
	scaleY: {
		1: 1,
		curve: function(k) {
			return 1 + (1 - scalePath(k)) / 1.5;
		}
	},
	originY: { 100: 100, curve: 'M0, 50 C0, 50 30, 50 30, 50 C30, 50 31.559139784946236, 0 31.559139784946236, 0 C31.559139784946236, 0 55.71492892960311, -0.1355624091374383 70, 0 C74.60765171555815, 54.42127669485172 100, 50 100, 50 ' },
	duration: DURATION
}

const square1 = new mojs.Html({
	...SQUARE_OPTS,
	el: '#js-el',
	angleZ: { 90: 90, curve: 'M0, 100 C0, 100 30, 0 30, 0 C30, 0 30, 100 30, 100 C30, 100 70, 100 70, 100 C70, 100 100, 0 100, 0 ' }
});

const square2 = new mojs.Html({
	...SQUARE_OPTS,
	el: '#js-el-small',
	y: {
		[-300]: -300, curve: 'M0, 0 C10.101525445522112, -1.5300968740935288 24.578551642263555, 1.7142857142857142 30, 87.42857142857143 C33.06687772061731, 107.14285714285714 50, 107 50, 107 C50, 107 62.917147228930936, 104.99294035155644 70, 87.14285714285714 C74.31276966857592, 6.435631077014981 90.03697870960255, 0.67295401695068 100, 0 ' },
	angleZ: {
		[-90]: [-90], curve: 'M0, 100 C0, 100 30, 0 30, 0 C30, 0 30, 100 30, 100 C30, 100 70, 100 70, 100 C70, 100 100, 0 100, 0 ' }
});

const FILLS = ['#7b7b7b', '#6b6b6b', '#5b5b5b', '#4a4a4a'];

const DUST_OPTS = {
	parent: '#js-scene',
	count: 5,
	top: '100%',
	left: '15%',
	x: { 0: 150, easing: 'cubic.in' },
	degree: 10,
	angle: { 90: 10, easing: 'cubic.inout' },
	radius: { 0: 150 },
	opacity: .35,
	timeline: { speed: .75 },
	children: {
		fill: FILLS,
		radius: 'rand(12,18)',
		direction: 1,
		pathScale: 'rand(.5, .75)',
		scale: { 1: 0, easing: 'cubic.inout' },
		isSwirl: true,
		swirlSize: 'rand(10, 17)',
		swirlFrequency: 'rand(2,4)',
		duration: 'stagger(300, 35)',
		delay: 235
	}
}

const dust1 = new mojs.Burst({
	...DUST_OPTS
});

const dust2 = new mojs.Burst({
	...DUST_OPTS,
	left: '70%',
	angle: {
		[-90]: -10, easing: 'cubic.inout' },
	x: { 0: -150, easing: 'cubic.in' },
	children: {
		...DUST_OPTS.children,
		direction: -1
	}
});

dust1.el.style.zIndex = 3;
dust2.el.style.zIndex = 3;

const shadow = new mojs.Html({
	el: '#js-shadow',
	opacity: {
		1: 1,
		curve: function(k) {
			return Math.max((scalePath(k) - 1) / 4, .05);
		}
	},
	scaleX: {
		1: 1,
		curve: function(k) {
			return 1.35 * scalePath(k);
		}
	},
	duration: DURATION
});

const timeline = new mojs.Timeline({ speed: .63 });
timeline.add(square1, square2, dust1, dust2, shadow);

new MojsPlayer({ add: timeline, isPlaying: true, isRepeat: true });
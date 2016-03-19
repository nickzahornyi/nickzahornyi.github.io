requirejs.config({
	paths: {
		'jquery': 'http://code.jquery.com/jquery-1.11.3.min',
		'tmpl': 'tmpl'
	},
	shim: {
		'jquery': {
			exports: 'jQuery'
		},
		'tmpl': {
			exports: 'tmpl'
		}
	}
});

require(
	['jquery', 'tmpl', 'model', 'view', 'controller'],
	function(jquery, tmpl, model, view, controller) {

		var firstToDoList = ['test1', 'test2', 'test3'];
		var model = new model(firstToDoList);
		var view = new view(model);
		var controller = new controller(model, view);
	}
);

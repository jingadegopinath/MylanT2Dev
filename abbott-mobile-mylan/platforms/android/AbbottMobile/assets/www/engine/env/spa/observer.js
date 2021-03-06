(function(global){
	'use strict'

	function Observer(){
		this.listeners = {};
	}

	Observer.prototype.subscribe = function(event, callback){
		if(!this.listeners.hasOwnProperty(event)){
			this.listeners[event] = [];
		}

		this.listeners[event].push(callback);
	};

	Observer.prototype.unsubscribe = function(event, callback){
		var listeners = this.listeners[event], index;

		if(listeners){
			index = listeners.indexOf(callback);

			if(index > -1){
				listeners.splice(index, 1);
			}
		}
	};

	Observer.prototype.publish = function(event, data){
		var listeners = this.listeners[event], index;

		if(listeners){
			for(index = 0; index < listeners.length; index++){
				listeners[index](data);
			}
		}
	};

	global.Observer = Observer;

})(window);


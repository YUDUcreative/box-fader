$(document).ready(function(){	var htmlOverlayVisible = (function () {	   	//stored state so that we can inform registering functions of the current state	    var isVisible = false;	    var ret = {};	    var overlayVisibleFunctions = [];	   	ret.registerFunction = function (myFunction) {	        overlayVisibleFunctions.push(myFunction);	        //if the overlay is currently visible, inform it	        if (isVisible) {	            myFunction();	        }	    };		function whenOverlayVisible(m) {		    var message = m.data.split(':')[0];		    if (message == 'overlayVisible') {		        isVisible = true;		        for (var i = 0, l = overlayVisibleFunctions.length; i < l; i++) {		            overlayVisibleFunctions[i]();		        }		    }		    else if (message == 'overlayNotVisible') {		        //update the state but don't call any functions as they only want to know when they become visible		        isVisible = false;		    }		}   		window.addEventListener('message', whenOverlayVisible, false);   		//inform the reader that we are ready to receive messages    	window.parent.postMessage('overlayAttached', '*');    	return ret;	}());	htmlOverlayVisible.registerFunction(function(){		init();	});});function init(){	var settings = {		'delay' : 1000,		'color' : '#fff',		'speed' : 1000,		'link' 	: '#'	};	var qString = getUrlVars();	if(typeof(qString.delay) !== "undefined"){		settings.delay = qString.delay;	}	if(typeof(qString.color) !== "undefined"){		settings.color = qString.color;	}	if(typeof(qString.speed) !== "undefined"){		settings.speed = qString.speed;	}	if(typeof(qString.link) !== "undefined"){		settings.link = qString.link;		$('div').wrap('<a href ="' + settings.link + '" target="_blank"></a>');	}	$('div').css('background-color', settings.color);	setTimeout(function(){		$('div').animate({ 'opacity' : '0' }, settings.speed);				}, settings.delay);};function getUrlVars(){    var vars = [], hash;    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');    for(var i = 0; i < hashes.length; i++){        hash = hashes[i].split('=');        vars.push(hash[0]);        vars[hash[0]] = hash[1];    }    return vars;}
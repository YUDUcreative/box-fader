
var htmlOverlayVisible = (function () {

   //stored state so that we can inform registering functions of the current state
    var isVisible = false;
    var ret = {};
    var overlayVisibleFunctions = [];

   ret.registerFunction = function (myFunction) {
        overlayVisibleFunctions.push(myFunction);
        //if the overlay is currently visible, inform it
        if (isVisible) {
            myFunction();
        }
    };

   function whenOverlayVisible(m) {
        var message = m.data.split(':')[0];
        if (message == 'overlayVisible') {
            isVisible = true;
            for (var i = 0, l = overlayVisibleFunctions.length; i < l; i++) {
                overlayVisibleFunctions[i]();
            }
        }
        else if (message == 'overlayNotVisible') {
            //update the state but don't call any functions as they only want to know when they become visible
            isVisible = false;
        }
    }

   window.addEventListener('message', whenOverlayVisible, false);
    //inform the reader that we are ready to receive messages
    window.parent.postMessage('overlayAttached', '*');
    return ret;
    
}());


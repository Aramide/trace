$(document).bind("mobileinit", function installSimultaneousTransitions() {

  var simultaneousHandler = $.mobile.transitionHandlers.simple,

  classicTransitionKeys = [
    "none",
    "slide",
    "slideup",
    "slidedown",
    "fade",
    "flip",
    "pop"
    ];

  plusTransitionKeys = [
    "slideoverleft",
    "slideoverright",
    "slidepushup",
    "slidepushdown"
    ];

  $.each(classicTransitionKeys, function(i) {
    $.mobile.transitionHandlers[classicTransitionKeys[i]] = simultaneousHandler;
    });

  $.each(plusTransitionKeys, function(i) {
    var key = plusTransitionKeys[i];
    $.mobile.transitionHandlers[key] = simultaneousHandler;
    $.mobile.transitionFallbacks[key] = "fade";
    });

});

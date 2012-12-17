$(document).on("mobileinit", function createSimpleHandler() {
  var simpleHandler = function( name, reverse, $to_p, $from_p ) {

    var deferred = new $.Deferred(),
        none = !$.support.cssTransitions || !name || name === "none",
        $to = $to_p,
        $from = $from_p,

    toggleViewportClass = function() {
      $.mobile.pageContainer.toggleClass( "ui-mobile-viewport-transitioning viewport-" + name );
      },

    done = function() {
      if ( $from ) {
        $from
          .height( "" )
          .removeClass( $.mobile.activePageClass + " out in reverse " + name );
        }
      $to
        .height( "" )
        .removeClass( "out in reverse " + name );
      toggleViewportClass();
      deferred.resolve( name, reverse, $to, $from, true );
      };

    $to.addClass( $.mobile.activePageClass );
    // Note: In many applications the following line may be unnecessary, and may be removed
    $.mobile.focusPage( $to );  // Send focus to page as it is now display: block
    if (none) {
      if ( $from ) {
        $from.removeClass( $.mobile.activePageClass );
        }
      deferred.resolve( name, reverse, $to, $from, true );
      } else {
        var screenHeight = $.mobile.getScreenHeight(),
            reverseClass = reverse ? " reverse" : "";
        toggleViewportClass();
        $to.animationComplete( done );
        $to
          .height( screenHeight ) // Note: setting an explicit height helps eliminate tiling in the transitions
          .addClass( name + " in" + reverseClass );
         $from
           .height( screenHeight )
           .addClass( name + " out" + reverseClass );
      }
    return deferred.promise();
    }
  $.mobile.transitionHandlers.simple = simpleHandler;
});

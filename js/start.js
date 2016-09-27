/**
 * START JS
 * @author: Long lanh
 * @date: 08/8/17
 * 1. Alert a msg: test()
 * 2. Hide a popup: test2()
 */
/* ----------------------------------------------- */
/* ------------- FrontEnd Functions -------------- */
/* ----------------------------------------------- */
var allpage_fn = {};
/**
 * 1. Alert a msg
 * @param  {[type]}
 * @return {[type]}
 */
allpage_fn.test = function (argument) {
     /* body... */
}
/**
 * 2. Hide a popup
 * @param  {[type]}
 * @return {[type]}
 */
function test2 (argument) {
     // body...
     $("#dropdown").on('click', function(event) {
         event.stopPropagation();
         /* Act on the event */
         if ($(this).hasClass('open')) {
            $(this).removeClass('open');
         } else {
             $(this).addClass('open');
         }
     });
     $('body').on('click', function(event) {
         event.preventDefault();
         /* Act on the event */
         var $selec = $.find('#dropdown');
         if ($($selec).hasClass('open')) {
            $($selec).removeClass('open');
         }
     });
    // $("#dropdown").bind( "clickoutside", function(event){
    //     $(this).removeClass('open');
    // });
}
// the element where the currently-called JQuery event hander was attached
/**
 * This property is most often useful in delegated events attached by .delegate() or .on(),
 * where the event handler is attached at an ancestor of the element being processed.
 * It can be used, for example, to identify and remove event handlers at the delegation point.

 For non-delegated event handlers attached directly to an element,
 event.delegateTarget will always be equal to event.currentTarget
 */

/**
 * get delegate --> button
 */
function test3 () {
    $(".box").on( "click", function( event ) {
        // event.stopPropagation();
        event.preventDefault();
        // $( event.delegateTarget ).css( "background-color", "red" );
        $( event.target ).css( "background-color", "red" );
        // alert( event.relatedTarget.nodeName );
    });
}

function test4() {
    $(".box").contextmenu(function() {
        alert( "Handler for .contextmenu() called." );
    });
}

function test5() {
    $('.btn').on("click",function() {
        // event.preventDefault();
        console.log("1");
        return false;
    });
}




/* ----------------------------------------------- */
/* ----------------------------------------------- */
/* OnLoad Page */
$(document).ready(function($){
    // Alert a msg
    allpage_fn.test();
    // Hide a popup
    test2();
    //
    test3();
    //
    test4();
    test5();
});
/* OnLoad Window */
var init = function () {

};

window.onload = init;
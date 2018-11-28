$(document).ready(function($) {
      $("iframe").vimeo("seekTo", 10);
      $("iframe").vimeo("play");

});

$("iframe").on("playProgress", function(event, data){
    console.log( data );
    if (data.percent >= 0.92) {
        $("iframe").vimeo("seekTo", 1)
    }
});
    
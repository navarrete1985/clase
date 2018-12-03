$(document).ready(function($) {
<<<<<<< HEAD
      $("iframe").vimeo("seekTo", 55);
=======
      $("iframe").vimeo("seekTo", 45.6);
>>>>>>> a483f9ed94a9e17a2fa7121b79fb6a8ed0705918
      $("iframe").vimeo("play");

});

$("iframe").on("playProgress", function(event, data){
    console.log( data );
    if (data.percent >= 0.92) {
        $("iframe").vimeo("seekTo", 1)
    }
});
    
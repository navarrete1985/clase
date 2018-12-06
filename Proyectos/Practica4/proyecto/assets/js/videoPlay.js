// var player = new Vimeo.Player($('iframe'));
var init = true;
$(document).ready(function($) {
    $("iframe").vimeo("seekTo", 45.6);
    $("iframe").vimeo("play");
});

$("iframe").on("playProgress", function(event, data){
    if (init) {
        document.getElementById('preloader').classList.add('hidden-preloader');
        init = false;
    }
    if (data.percent >= 0.92) {
        $("iframe").vimeo("seekTo", 1)
    }
});
  
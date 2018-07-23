$(document).ready(function() {
    $(".member-name").fitText(1.1, { minFontSize: '45px'});
    var audio = new Audio('./resources/music.mp3');
    audio.loop = true;
    $('#muteButton').click(function() {
        if ($(this).attr("data-play-music") === "0") {
            // Play music!
            $(this).attr("data-play-music", "1");
            $('#volumeOff').addClass("hidden");
            $('#volumeOn').removeClass("hidden");
            audio.play();
        } else {
            $(this).attr("data-play-music", "0");
            $('#volumeOff').removeClass("hidden");
            $('#volumeOn').addClass("hidden");
            audio.pause();
        }
    });
});
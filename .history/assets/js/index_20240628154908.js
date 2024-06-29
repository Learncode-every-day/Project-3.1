var myVideo1 = document.getElementById("myVideo1");
var playBtn = document.getElementById("play-btn");

function playPause() {
    if (myVideo1.paused) {
        playBtn.style.opacity = 0;
        myVideo1.play();
    } else {
        playBtn.style.opacity = 0.7;
        myVideo1.pause();
    }
}

var video = document.getElementById('video-corp');
video.addEventListener('click', function (event) {
    launchFullScreen(this);
    this.play();
});

function launchFullScreen (element) {
    if(element.requestFullscreen) {
        element.requestFullscreen();
    } else if(element.mozRequestFullscreen) {
        element.mozRequestFullscreen();
    } else if(element.webkitRequestFullscreen){
        element.webkitRequestFullscreen();
    } else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

function exitFullScreen () {
    if(document.exitFullScreen) {
        document.exitFullscreen();
    } else if(document.mozCancelFullscreen) {
        document.mozCancelFullscreen();
    } else if(document.webkitExitFullscreen){
        document.webkitExitFullscreen();
    } else if(document.msExitFullScreen) {
        document.msExitFullscreen();
    }
}
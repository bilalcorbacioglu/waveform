function cursorAnimate() {
    requestAnimationFrame(() => {
        if (pause.disabled) {
            return;
        }
        const cursorSpeed = canvasWidth / audioPlayer.duration;
        const location = audioPlayer.currentTime * cursorSpeed;
        cursorContext.clearRect(0, 0, canvasWidth, canvasHeight);
        cursorContext.beginPath();
        cursorContext.strokeStyle = "red";
        cursorContext.moveTo(location, 0);
        cursorContext.lineTo(location, canvasHeight);
        cursorContext.stroke();
        cursorContext.closePath();
        if (audioPlayer.duration != audioPlayer.currentTime) {
            cursorAnimate();
        } else {
            pause.disabled = true;
            play.disabled = false;
            return;
        }
    });
}

function loadingAnimate() {
    waveformContext.beginPath();
    waveformContext.textAlign = "center";
    waveformContext.fillText("Please wait ...", canvasWidth / 2, canvasHeight / 2);
}
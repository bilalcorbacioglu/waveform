document.querySelector('input').onchange = function() {
    var fileReader = new FileReader;
    fileReader.onload = function() {
        var arrayBuffer = this.result;
        cursorContext.clearRect(0, 0, canvasWidth, canvasHeight);
        waveformContext.clearRect(0, 0, canvasWidth, canvasHeight);
        initAudio(arrayBuffer, waveformCanvas, waveformContext);
    }

    fileReader.readAsArrayBuffer(this.files[0]);
    var file = URL.createObjectURL(this.files[0]);
    audioPlayer.src = file;
    play.disabled = false
    restart.disabled = false;
    pause.disabled = true;
};

play.onclick = function() {
    audioPlayer.play();
    play.disabled = true;
    pause.disabled = false;
    cursorAnimate();
}
pause.onclick = function() {
    audioPlayer.pause();
    pause.disabled = true;
    play.disabled = false;
}
restart.onclick = function() {
    audioPlayer.currentTime = 0; //still continue to download stream
    pause.onclick();
    play.onclick();
}
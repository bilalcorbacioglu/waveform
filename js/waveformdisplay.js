// Step Method
function drawBuffer(width, height, context, buffer) {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    //Mono or Stereo
    for (var channelIndex = 0; channelIndex < buffer.numberOfChannels; channelIndex++) {
        var data = buffer.getChannelData(channelIndex);
        var step = Math.ceil(data.length / width);
        var amp = height / 2;
        for (var i = 0; i < width; i++) {
            var min = 1.0;
            var max = -1.0;
            for (var j = 0; j < step; j++) {
                var datum = data[(i * step) + j];
                if (datum < min)
                    min = datum;
                if (datum > max)
                    max = datum;
            }
            context.fillRect(i, (1 + min) * amp, 1, Math.max(1, (max - min) * amp));
        }
    }
}

function initAudio(arrayBuffer, canvas, context) {
    loadingAnimate();
    var audioContext = new(window.AudioContext || window.webkitAudioContext);
    audioContext.decodeAudioData(arrayBuffer,
        function(buffer) {
            drawBuffer(canvas.width, canvas.height, context, buffer);
        }
    );
}
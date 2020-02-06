var audioPlayer = document.getElementById('audio-player');
var play = document.querySelector('.play');
var pause = document.querySelector('.pause');
var restart = document.querySelector('.restart');

var waveformCanvas = document.getElementById("waveform-canvas");
var cursorCanvas = document.getElementById("cursor-canvas");
var waveformContext = waveformCanvas.getContext("2d");
var cursorContext = cursorCanvas.getContext("2d");

var canvasWidth = waveformCanvas.width;
var canvasHeight = waveformCanvas.height;
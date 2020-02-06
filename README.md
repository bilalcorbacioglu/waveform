# Waveform
[Live Demo](https://bilalcorbacioglu.github.io/waveform/)  - VanillaJS, Canvas, Web Audio

### How to use ?
  - Just clone the repo and open index.html! or [Live Demo](https://bilalcorbacioglu.github.io/waveform/)

### Targets
  - Allows the user the load an audio file from their local machine.
  - Display a waveform of the audio file in a canvas element. If the audio file is stereo, it must display a combined waveform of both channels.
  - Add a button that allows the user to playback and pause the audio.
  - Add a playhead cursor to the waveform to show the current play / pause position.

### Structure
    .
    ├── js                   # Javascript files
        ├── actions.js                  # Dom Actions(Methods)
        ├── animate.js                  # Canvas Animations
        ├── definations.js              # Definations
        └── waveformdisplay.js          # Waveform Animation
    ├── css                  # Css files
        └── index.html                  # Home Page
    ├── sounds               # Example Sounds
    └── index.html           # Home Page

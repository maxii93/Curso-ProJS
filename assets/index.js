import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const button = document.querySelector("button");
const btnmute = document.querySelector(".mutear");

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

button.onclick = () => player.togglePlay();

btnmute.onclick = () => player.toggleMute();

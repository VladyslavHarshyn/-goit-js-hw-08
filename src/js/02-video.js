import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let saveTimeFromVid = localStorage.getItem('videoplayer-current-time');

player.on('timeupdate', throttle(onTimeOfPlayer, 1000));

function onTimeOfPlayer({ seconds }) {
  console.log('played the video!');
  localStorage.setItem('videoplayer-current-time', seconds);
}

let time = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(saveTimeFromVid);

function calculateDuration(seconds) {
  const minutes = Math.floor(seconds / 60),
    secs = Math.floor(seconds % 60);
  return [minutes, secs];
}

const slide = (i) => {
  music.element.style.transform = i === 1 ? 'translateY(100%)' : 'translateY(0%)';

  bottom.data.src = musicDataList[index].img;
  bottom.data.musicArtist = musicDataList[index].artiste;
  bottom.data.musicTitle = musicDataList[index].title;

  if (i === -1) {
    vibrateDevice();
  }

}

const update = () => {
  music.data.barWidth = (audio.currentTime / audio.duration) * 100;
  timeUpdate = setInterval(() => {
    music.data.seconds = music.data.seconds == 59 ? 0 : music.data.seconds + 1;
    music.data.minutes = music.data.seconds == 0 ? music.data.minutes + 1 : music.data.minutes;
    music.data.barWidth = (audio.currentTime / audio.duration) * 100;
  }, 1000);
}

const animate = (condition) => {
  if (condition) {
    clearInterval(animation);
    animation = setInterval(() => {
      let c = colors.indexOf(music.data.borderColor);
      music.data.borderColor = c === colors.length - 1 ? colors[0] : colors[c + 1];
    }, 700);
  } else {
    clearInterval(animation);
  }
}

function nextPrev(num) {
  let i;

  if (num === 1) {
    i = index === musicDataList.length - 1 ? 0 : index + 1;
  } else {
    i = index === 0 ? musicDataList.length - 1 : index - 1;
  }

  playMusic(i);
  animate(true);
  vibrateDevice();
}


function pausePlay() {
  if (music.data.pausePlayIcon === "▶️") {
    music.data.pausePlayIcon = "| |";
    bottom.data.pausePlayIcon = "| |";
    audio.play();
    animate(true);
    update();
  } else {
    music.data.pausePlayIcon = "▶️";
    bottom.data.pausePlayIcon = "▶️";
    audio.pause();
    clearInterval(timeUpdate);
    animate(false);
  }
}

  alert('Welcome! 💻');
  
function seek(e) { 
  const xCoord = e.clientX,
    width = window.innerWidth,
    middle = width / 2,
    percent = ((xCoord / width) * 100),
    final = (xCoord >= middle ? percent + 3 : percent - 5);

  music.data.barWidth = final;

  const len = audio.duration,
    dLen = (final * len) / 100,
    [mins, secs] = calculateDuration(dLen);
  audio.currentTime = dLen;

  if (music.data.pausePlayIcon === "| |") {
    audio.play();
    clearInterval(timeUpdate);
    update();
  }

  music.data.minutes = mins;
  music.data.seconds = secs;

  const [minutes, seconds] = calculateDuration(audio.duration);
  music.data.audioLen = minutes + ":" + (seconds > 9 ? seconds : "0" + seconds);
}

function playMusic(i) {
  music.data.seconds = 0;
  music.data.minutes = 0;
  index = i;
  music.data.album = musicDataList[index].album;
  music.data.imgSrc = musicDataList[index].img;
  audio.src = "./audios/" + musicDataList[index].audio;
  music.data.musicTitle = musicDataList[index].title;
  music.data.artisteName = musicDataList[index].artiste;

  bottom.data.src = musicDataList[index].img;
  bottom.data.musicArtist = musicDataList[index].artiste;
  bottom.data.musicTitle = musicDataList[index].title;

  music.data.pausePlayIcon = "| |";
  bottom.data.pausePlayIcon = "▶️";
  clearInterval(timeUpdate);

  setTimeout(() => {
    const [minutes, seconds] = calculateDuration(audio.duration);
    music.data.audioLen = minutes + ":" + (seconds > 9 ? seconds : "0" + seconds);
    bottom.data.pausePlayIcon = "| |";
    audio.play();
    update();
  }, 150);
}

function vibrateDevice() {
  if (navigator.vibrate) {
    navigator.vibrate([25, 25, 25]); // Vibrate 25ms 3 times in a row
  } else {
    console.log("Your browser does not support the vibration API.");
  }
}
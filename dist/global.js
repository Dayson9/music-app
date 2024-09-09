var timeUpdate, music, bottom, index = 0,
  audio = new Audio("./audios/Asake_Wave.mp3");

const musicDataList = [
  {
    audio: "Asake_Wave.mp3",
    img: "wave.jpeg",
    album: "Lungu Boy",
    artiste: "Asake & Central Cee",
    title: "Wave"
  },
  {
    audio: "synchro_system.mp3",
    img: "ikigai.jpeg",
    album: "Ikigai",
    artiste: "Olamide (feat. Pheelz, Young John & Lil Kesh)",
    title: "Synchro System"
  },
  {
    audio: "iseoluwa.mp3",
    img: "adedamola.jpeg",
    album: "adedamola",
    artiste: "Fireboy DML",
    title: "Iseoluwa"
  },
  {
    audio: "fuji_vibe.mp3",
    img: "lungu_boy.jpeg",
    album: "Lungu Boy",
    artiste: "Asake",
    title: "Fuji Vibe"
  },
  {
    audio: "wandes_bop.mp3",
    img: "adedamola.jpeg",
    album: "adedamola",
    artiste: "Fireboy DML (feat. Spinall)",
    title: "wande's bop"
  },
  {
    audio: "mentally.mp3",
    img: "lungu_boy.jpeg",
    album: "Lungu Boy",
    artiste: "Asake",
    title: "Mentally"
  },
  {
    audio: "mms.mp3",
    img: "lungu_boy.jpeg",
    album: "Lungu Boy",
    artiste: "Asake & Wizkid",
    title: "MMS"
  }];

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
}

const update = () => {
  music.data.barWidth = (audio.currentTime / audio.duration) * 100;
  timeUpdate = setInterval(() => {
    music.data.seconds = music.data.seconds == 59 ? 0 : music.data.seconds + 1;
    music.data.minutes = music.data.seconds == 0 ? music.data.minutes + 1 : music.data.minutes;
    music.data.barWidth = (audio.currentTime / audio.duration) * 100;
  }, 1000);
}

function nextPrev(num) {
  music.data.seconds = 0;
  music.data.minutes = 0;
  let i;

  if (num === 1) {
    i = index === musicDataList.length - 1 ? 0 : index + 1;
  } else {
    i = index === 0 ? musicDataList.length - 1 : index - 1;
  }

  playMusic(i);
}


function pausePlay() {
  if (music.data.pausePlayIcon === "▶️") {
    music.data.pausePlayIcon = "| |";
    bottom.data.pausePlayIcon = "| |";
    audio.play();
    update();
  } else {
    music.data.pausePlayIcon = "▶️";
    bottom.data.pausePlayIcon = "▶️";
    audio.pause();
    clearInterval(timeUpdate);
  }
}

function seek(e) {
  const xCoord = e.clientX,
    width = window.innerWidth,
    middle = width / 2,
    percent = ((xCoord / width) * 100),
    final = (xCoord >= middle ? percent + 3 : percent - 5);

  music.data.barWidth = final;

  const len = audio.duration,
    dLen = (final * len) / 100,
    dur = calculateDuration(dLen);
  audio.currentTime = dLen;

  if (music.data.pausePlayIcon === "| |") {
    audio.play();
    clearInterval(timeUpdate);
    update();
  }

  music.data.minutes = dur[0];
  music.data.seconds = dur[1];

  const duration = calculateDuration(audio.duration);
  music.data.audioLen = duration[0] + ":" + (duration[1] > 9 ? duration[1] : "0" + duration[1]);
}

function playMusic(i) {
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
    const dur = calculateDuration(audio.duration);
    music.data.audioLen = dur[0] + ":" + (dur[1] > 9 ? dur[1] : "0" + dur[1]);
    bottom.data.pausePlayIcon = "| |";
    audio.play();
    update();
  }, 150);
}


// Whenever music ends, play the next one.
audio.onended = () => nextPrev(1);
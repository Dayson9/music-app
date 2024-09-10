var timeUpdate, music, bottom, index = 0,
  animation,
  audio = new Audio("./audios/Asake_Wave.mp3");

const colors = ["wheat", "aliceblue", "skyblue", "cornflowerblue", "lightblue", "dodgerblue", "crimson", "red", "orangered", "orange", "gold", "yellow", "lightyellow", "green", "lightgreen", "lemon", "cyan", "skyblue", "lightblue", "cornflowerblue", "dodgerblue", "pink", "orchid", "hotpink", "purple", "darkorchid", "indigo", "violet"];

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


// Whenever music ends, play the next one.
audio.onended = () => nextPrev(1);
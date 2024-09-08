var timeUpdate, index = 0;

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
    artiste: "Olamide (feat. Pheelz, Young John & Lil Kesh",
    title: "Synchro System"
  },
  {
    audio: "",
    img: "",
    album: "",
    artiste: "",
    title: ""
  }];

function calculateDuration(seconds) {
  const minutes = Math.floor(seconds / 60),
    secs = Math.floor(seconds % 60);
  return [minutes, secs];
}
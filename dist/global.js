var timeUpdate;

const musicDataList = [
  {
    audio: "Asake_Wave.mp3",
    img: "car.jpg",
    album: "Lungu Boy",
    artiste: "Asake & Central Cee",
    title: "Wave"
  },
  {
    audio: "",
    img: "",
    album: "",
    artiste: "",
    title: ""
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
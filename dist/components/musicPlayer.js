import { musicPlayerStyles } from '../style.js';

const { QComponent } = QueFlow;


var musicPlayer = new QComponent("#music", {
  stylesheet: musicPlayerStyles,
  data: {
    transform: "100%",
    album: musicDataList[0].album,
    imgSrc: musicDataList[0].img,
    audioSrc: musicDataList[0].audio,
    musicTitle: musicDataList[0].title,
    artisteName: musicDataList[0].artiste,
    barWidth: 0,
    pausePlayIcon: "▶️",
    minutes: 0,
    seconds: 0,
    audioLen: "0:00",
    borderColor: colors[0]
  },
  template: () => {
    return `
      <div class='container' transform='{{ "translateY("+this.data.transform+")" }}'>
        <div class='row'>
          <svg width='20' height='17' onclick="slide(1);">
            <polyline points="0,0 10,10 20,0" stroke='white' stroke-width='2'/>
          </svg>
          <div class='column' font-size='0.9em'>
            <p>FROM THE ALBUM</p>
            <b>{{ this.data.album }}</b>
          </div>
          <div class='right'></div>
        </div>
        <img src="{{ './images/'+this.data.imgSrc }}" alt='Album Cover' outline='4px solid {{ this.data.borderColor }}' border-radius='5px'/>
        <div id='controls'>
          <div class='column big'>
            <p>{{ this.data.artisteName }}</p>
            <b>{{ this.data.musicTitle }}</b>
          </div>
 
          <div id='duration'>
            <div class='out' onclick='seek(e);'>
              <div class='in' width='{{ this.data.barWidth+"%" }}' background='{{ this.data.borderColor }}'></div>
            </div>
            <div class='row'>
              <p>{{ this.data.minutes }}:{{ this.data.seconds > 9 ? this.data.seconds : "0"+this.data.seconds }}</p>
              <p>{{ this.data.audioLen }}</p>
            </div>
          </div> 
          <div class='row cont'>
            <b>•••</b>
            <b onclick='nextPrev(-1)'>⏮️</b>
            <div width='60' height='60' onclick='pausePlay()' class='ring' id='pp'>
              <b>{{ this.data.pausePlayIcon }}</b>
            </div>
            <b onclick='nextPrev(1)'>⏭️</b>
            <b>🔀</b>
           </div>
        </div>
      </div>`
  },
  run: () => {
    setTimeout(() => {
      this.data.transform = "0%";

      const dur = calculateDuration(audio.duration);
      this.data.audioLen = dur[0] + ":" + (dur[1] > 9 ? dur[1] : "0" + dur[1]);
    }, 1800);
    
  }
});

export { musicPlayer }
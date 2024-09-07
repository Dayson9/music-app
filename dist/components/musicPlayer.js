import { musicPlayerStyles } from '../style.js';

const { QComponent } = QueFlow;


const musicPlayer = new QComponent("#music", {
  stylesheet: musicPlayerStyles,
  data: {
    transform: "91%",
    album: musicDataList[0].album,
    imgSrc: musicDataList[0].img,
    audioSrc: musicDataList[0].audio,
    musicTitle: musicDataList[0].title,
    artistName: musicDataList[0].artiste,
    barWidth: 0,
    pausePlayIcon: "▶️",
    minutes: 0,
    seconds: 0,
    audioLen: "0:00"
  },
  template: () => {
    return `
      <div class='container' transform='{{ "translateY("+this.data.transform+")" }}'>
        <div class='row'>
          <svg width='20' height='17' onclick="this.data.transform = ( this.data.transform == '91%' ? '0%' : '91%')">
            <polyline points="0,0 10,10 20,0" stroke='white' stroke-width='2.5'/>
          </svg>
          <div class='column'>
            <p>FROM THE ALBUM</p>
            <b>{{ this.data.album }}</b>
          </div>
          <div class='right'></div>
        </div>
        <img src="{{ './images/'+this.data.imgSrc }}" alt='Album Cover'/>
        <div id='controls'>
          <div class='column big'>
            <p>{{ this.data.artistName }}</p>
            <b>{{ this.data.musicTitle }}</b>
          </div>
 
          <div id='duration'>
            <div class='out' onclick='{
              const xCoord = e.clientX, width = window.innerWidth, middle = width / 2, percent = (xCoord/width)*100+3,
              final = (xCoord >= middle ? percent+3 : percent-8);
              
              this.data.barWidth = final;
              
              const len = audio.duration, dLen = (final*len)/100, dur = calculateDuration(dLen);
              audio.currentTime = dLen;

              this.data.minutes = dur[0];
              this.data.seconds = dur[1];
            }'>
              <div class='in' width='{{ this.data.barWidth+"%" }}' transition='.2s'></div>
            </div>
            <div class='row'>
              <p>{{ this.data.minutes }}:{{ this.data.seconds > 9 ? this.data.seconds : "0"+this.data.seconds }}</p>
              <p>{{ this.data.audioLen }}</p>
            </div>
          </div> 
          <div class='row cont'>
            <b>•••</b>
            <b>⏮️</b>
            <div width='60' height='60' onclick='{
                const dur = calculateDuration(audio.duration);
                this.data.audioLen = dur[0]+":"+(dur[1] > 9 ? dur[1] : "0"+dur[1]);
              if(this.data.pausePlayIcon == "▶️") {
                this.data.pausePlayIcon = "| |";
                audio.play();
              timeUpdate = setInterval(() => {
                this.data.seconds = this.data.seconds == 59 ? 0 : this.data.seconds + 1;
                this.data.minutes = this.data.seconds == 0 ? this.data.minutes + 1 : this.data.minutes;
                this.data.barWidth = (audio.currentTime/audio.duration)*100;
              }, 1000);
              } else {
                this.data.pausePlayIcon = "▶️";
                audio.pause();
                clearInterval(timeUpdate);
              }
            }' class='ring'>
              <b>{{ this.data.pausePlayIcon }}</b>
            </div>
            <b>⏭️</b>
            <b>🔀</b>
           </div>
        </div>
      </div>
      <audio src="{{ './audios/'+this.data.audioSrc }}" display='none' id='audio'>`
  },
  run: () => {
    setTimeout(() => {
      this.data.transform = "0%";
    }, 1800);

  }
});

export { musicPlayer }
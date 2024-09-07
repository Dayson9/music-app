import { musicPlayerStyles } from '../style.js';

const { QComponent } = QueFlow;

const musicPlayer = new QComponent("#music", {
  stylesheet: musicPlayerStyles,
  data: {
    transform: "91%",
    album: "Lungu Boy",
    imgSrc: "./assets/car.jpg",
    audioSrc: "",
    musicTitle: "Wave",
    artistName: "Asake & Central Cee",
    barWidth: "40%",
    pausePlayIcon: "▶️"
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
        <img src="{{ this.data.imgSrc }}" alt='Album Cover'/>
        <div id='controls'>
          <div class='column big'>
            <p>{{ this.data.artistName }}</p>
            <b>{{ this.data.musicTitle }}</b>
          </div>
          <div id='duration'>
            <div class='out'>
              <div class='in' width='{{ this.data.barWidth }}' transition='.3s'></div>
            </div>
            <div class='row'>
              <p>3:23</p>
              <p>3:54</p>
            </div>
          </div> 
          <div class='row cont'>
            <b>•••</b>
            <b>⏮️</b>
            <div width='60' height='60' onclick='{
              if(this.data.pausePlayIcon == "▶️") {
                this.data.pausePlayIcon = "| |";
              } else {
                this.data.pausePlayIcon = "▶️";
              }
            }' class='ring'>
              <b>{{ this.data.pausePlayIcon }}</b>
            </div>
            <b>⏭️</b>
            <b>🔀</b>
           </div>
        </div>
      </div>`
  },
  run: () => {
    setTimeout(() => {
      this.data.transform = "0%";
    }, 1800);

  }
});

export { musicPlayer }
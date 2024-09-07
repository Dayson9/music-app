import { musicPlayerStyles } from '../style.js';

const { QComponent } = QueFlow;

const musicPlayer = new QComponent("#music", {
  stylesheet: musicPlayerStyles,
  data: {
    transform: "85%",
    album: "Lungu Boy",
    src: "./assets/car.jpg",
    musicTitle: "Wave",
    artistName: "Asake & Central Cee"
  },
  template: () => {
    return `
      <div class='container' transform='{{ "translateY("+this.data.transform+")" }}'>
        <div class='row'>
          <svg width='20' height='17' onclick="this.data.transform = ( this.data.transform == '85%' ? '0%' : '85%')">
            <polyline points="0,0 10,10 20,0" stroke='white' stroke-width='2.5'/>
          </svg>
          <div class='column'>
            <p>FROM THE ALBUM</p>
            <b>{{ this.data.album }}</b>
          </div>
          <div class='right'></div>
        </div>
        <img src="{{ this.data.src }}" alt='Album Cover'/>
        <div id='controls'>
          <div class='column big'>
            <p>{{ this.data.artistName }}</p>
            <b>{{ this.data.musicTitle }}</b>
          </div>
        </div>
      </div>`
  },
 run: () => {
   setTimeout(() =>{
     this.data.transform = "0%";
   }, 2000)
 } 
})

export { musicPlayer }
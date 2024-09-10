import { bottomBarStyles } from '../style.js';

const { QComponent } = QueFlow;


var bottomBar = new QComponent("#bottom-bar", {
  stylesheet: bottomBarStyles,
  data: {
    src: "",
    musicArtist: "",
    musicTitle: "",
    pausePlayIcon: "▶️"
  },
  template: () => {
    return `
      <div id='container' class='glass' color='white' onclick='{
      if(e.target.className !== "" && e.target.className !== "ring")
         slide(-1);
      }'>
        <img src='./images/{{ this.data.src }}' class='img'/>
        <div class='info'>
          <p class='p'>{{ this.data.musicArtist }}</p>
          <b class='b'>{{ this.data.musicTitle }}</b>
        </div>
        <div class='pausePlay'>
          <div width='50' height='50' onclick='pausePlay()' class='ring'>
            <b>{{ this.data.pausePlayIcon }}</b>
          </div>
        </div>
      </div>
    `
  }
});

export { bottomBar }
import { musicListStyles } from '../style.js';

const { Template } = QueFlow;

const musicList = new Template("#list", musicListStyles,
  ({ i }) => {
    if (i === 0) {
      return `
        <div id='container' color='white' onclick='playMusic({{ i }})' margin-top='50px'>
            <img src='./images/{{ src }}'/>
            <div class='info'>
              <p>{{ musicArtist }}</p>
              <b>{{ musicTitle }}</b>
            </div>
        </div>
        <div background='grey' class='hr'></div>`;

    } else {

      if (i < musicDataList.length - 1) {
        return `
      <div id='container' color='white' onclick='playMusic({{ i }})'>
            <img src='./images/{{ src }}'/>
            <div class='info'>
              <p>{{ musicArtist }}</p>
              <b>{{ musicTitle }}</b>
            </div>
      </div>
        <div background='grey' class='hr'></div>`;

      } else {
        return `
        <div id='container' color='white' onclick='playMusic({{ i }})'>
            <img src='./images/{{ src }}'/>
            <div class='info'>
              <p>{{ musicArtist }}</p>
              <b>{{ musicTitle }}</b>
            </div>
        </div>
        <div class='hr' background='grey' margin-bottom='80px'></div>`
      }
    }
  });

export { musicList }
import { musicListStyles } from '../style.js';

const { Template } = QueFlow;

const musicList = new Template("#list", musicListStyles,
  () => {
    return `
      <div id='container' color='white' onclick='playMusic({{ i }})'>
            <img src='./images/{{ src }}'/>
            <div class='info'>
              <p>{{ musicArtist }}</p>
              <b>{{ musicTitle }}</b>
            </div>
        </div>`;
  });

export { musicList }
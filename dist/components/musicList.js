import { musicListStyles } from '../style.js';

const { Template } = QueFlow;

const musicList = new Template("#list", musicListStyles,
  ({ i }) => {
    if(i === 0)
    return `
        <div id='container' color='white' onclick='playMusic({{ i }})' margin-top='100%'>
            <img src='./images/{{ src }}'/>
            <div class='info'>
              <p>{{ musicArtist }}</p>
              <b>{{ musicTitle }}</b>
            </div>
        </div>
        <div background='grey' class='hr'></div>'`;
    
    
    return `
      <div id='container' color='white' onclick='playMusic({{ i }})'>
            <img src='./images/{{ src }}'/>
            <div class='info'>
              <p>{{ musicArtist }}</p>
              <b>{{ musicTitle }}</b>
            </div>
        </div>
        <div background='grey' class='hr'></div>'`;
  });

export { musicList }
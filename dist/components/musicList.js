import { musicListStyles } from '../style.js';

const { Template } = QueFlow;

const musicList = new Template("#list", musicListStyles,
  () => {
    return `<div class='list-container'>
              <img src={{src}} />
            </div>'`;
  });

export { musicList }
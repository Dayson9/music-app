import { musicListStyles } from '../style.js';

const { Template } = QueFlow;

const musicList = new Template("#list", musicListStyles, 
() =>{
  return ``;
});

export { musicList }
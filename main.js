import { loaderStyles, musicPlayerStyles } from './style.js';

const { QComponent } = QueFlow;


const loader = new QComponent("#loaderContainer", {
  stylesheet: loaderStyles,
  data: {
    transform: "0px"
  },
  template: () => {
     return `
    <div id="loader" transform={{"translateY("+this.data.transform+")"}}>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
    </div>
     `
  },
  
});

loader.render();

setTimeout(() =>{
  loader.data.transform = "100%";
}, 6000);

console.log(document.querySelectorAll("style")[1].innerText);
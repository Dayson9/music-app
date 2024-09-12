import { loaderStyles } from '../style.js';

const { QComponent } = QueFlow;

const loader = new QComponent("#loaderContainer", {
  stylesheet: loaderStyles,
  data: {
    transform: "0px"
  },
  template: () => {
    return `
    <div id="loader" transform="translateY({{ this.data.transform }})">
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
    </div>
     `
  },

  run: () => {
    setTimeout(() => {
      this.data.transform = "100%";
    }, 5000);

  }

});

export { loader }
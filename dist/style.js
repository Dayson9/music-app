const loaderStyles = {
  ".wave": `
    width: 2.5px;
    height: 40px;
    background: white;
    margin: 10px;
    animation: wave 0.8s alternate infinite;
    border-radius: 20px;
  `,

  ".wave:nth-child(1)": `
      animation-delay: 0.6s;
    `,

  ".wave:nth-child(2)": `
      animation-delay: 0.4s;
    `,
  ".wave:nth-child(3)": `
      animation-delay: 0.2s;
    `,
  ".wave:nth-child(4)": `
      animation-delay: 0.4s;
    `,
  ".wave:nth-child(5)": `
      animation-delay: 0.6s;
    `,

  "@keyframes wave": {
    "0%": "transform: translateY(0px);",
    "100%": "transform: translateY(-30px);"
  }
};

const musicPlayerStyles = {
  ".container" : `
    width: 100%;
    height: 100%;
    background: transparent;
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `,
  
  ".big" : `
      font-size: 1.3em;
    `
  ,
  ".row" : `
    color: white;
    width: 100vw;
    height: 40px;
    background: rgba(14, 11, 15, 1);
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  "svg" : `
    margin-left: 10px;
  `,
  ".column" : `
    width: auto;
    height: 20;
    text-align: center;
    box-sizing: border-box;
  `,
  ".column > p" : `
    margin-top: 6px;
  `,
  ".column > b" : `
    
  `,
  ".right" : `
    width: 10%;
    height: 100%;
  `,
  "img" : `
    width: 200px;
    height: 220px;
  `,
  "#controls" : `
    width: 100%;
    height: 30%;
    border: 1px solid white;
    color: white;
  `
};

export { loaderStyles, musicPlayerStyles }
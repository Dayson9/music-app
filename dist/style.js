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
  "div" : "box-sizing: border-box;",
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
      font-size: 1.1em;
    `
  ,
  ".big b" : `margin-top: 5px;`,
  ".row" : `
    color: white;
    width: 100%;
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
  `,
  ".column > p" : `
    margin-top: 6px;
    margin-bottom: -2px;
  `,
  ".right" : `
    width: 10%;
    height: 100%;
  `,
  "img" : `
    width: 250px;
    height: 250px;
    transform: translateY(-15px);
  `,
  "#controls" : `
    width: 100%;
    height: 34%;
    color: white;
    transform: translateY(-20px);
  `,
  "#duration" : `
      width: 100%;
      height: 27%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: space-around;
      margin-top: 15px;
    `,
  ".out" : `
    width: 90%;
    height: 8px;
    background: white;
    border-radius: 4px;
    margin: 0 auto;
  `,
  ".in" : `
    height: 8px;
    max-width: 100%;
    background: teal;
    border-radius: inherit;
  `,
  "#duration .row" : "width: 90%; margin: 0 auto;",
  ".cont" : "font-size: 32px; width: 90%; margin: 0 auto;"
};

const musicListStyles = {
  ".header" : `
    width: 100%;
    height: 40px;
    border-bottom: 1px solid grey;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    too: 0;
  `,
  "img" : `
    width: 60px;
    height: 60px;
  `,
  "#container" : `
    width: 100%;
    height: 80px;
    background: inherit;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 5px;
  `,
  "img" : `
    width: 50px;
    height: 50px;
  `,
  ".info" : `
    width: 60%;
    height: 100%;
    font-size: 0.8em;
  `,
  ".hr" : `
    width: 100%;
    height: 1px;
  `
};

const bottomBarStyles = {
  "#container" : `
    width: 100%;
    height: 14%;
    background: inherit;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  `,
  "img" : `
    width: 50px;
    height: 50px;
  `,
  ".info" : `
    width: 60%;
    height: 100%;
    font-size: 0.8em;
  `,
};


export { loaderStyles, musicPlayerStyles, musicListStyles, bottomBarStyles }
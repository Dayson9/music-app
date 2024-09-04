const loaderStyles = {
  ".wave" : `
    width: 2.5px;
    height: 40px;
    background: white;
    margin: 10px;
    animation: wave 0.8s alternate infinite;
    border-radius: 20px;
  `,
  
  ".wave:nth-child(1)" : `
      animation-delay: 0.6s;
    `,
  
    ".wave:nth-child(2)" : `
      animation-delay: 0.4s;
    `,
    ".wave:nth-child(3)" : `
      animation-delay: 0.2s;
    `,
    ".wave:nth-child(4)": `
      animation-delay: 0.4s;
    `,
    ".wave:nth-child(5)" : `
      animation-delay: 0.6s;
    `
    };

const musicPlayerStyles ={
  
};

export { loaderStyles, musicPlayerStyles }
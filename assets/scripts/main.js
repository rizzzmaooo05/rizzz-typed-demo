const clientWidth = window.innerWidth;
const htmlElement = document.querySelector("html");
const fontSize = Math.floor(clientWidth / 80);
htmlElement.style.fontSize =
  clientWidth > 1280 ? fontSize.toString() + "px" : "16 px";

const configuration = {
  query: "#main > p",
  texts: [],
  isLoop: true,
};

const textWrapperElement = document.getElementById("text-wrapper");
const childrenTextWrapper = textWrapperElement.children;
const saveChangesElement = document.getElementById("save-changes");

const addTextElement = document.getElementById("add-text");
addTextElement.onclick = function () {
  const newInput = document.createElement("input");
  newInput.setAttribute("type", "text");
  textWrapperElement.appendChild(newInput);
};

saveChangesElement.onclick = function () {
  const typeSpeedElement = document.getElementById("type-speed");
  const deleteSpeedElement = document.getElementById("delete-speed");
  const blinkSpeedElement = document.getElementById("blink-speed");

  for (let i = 0; i < childrenTextWrapper.length; i++) {
    configuration.texts.push(childrenTextWrapper[i].value);
  }

  configuration.typeSpeed = Math.abs(parseInt(typeSpeedElement.children[1].value));
  configuration.deleteSpeed = Math.abs(parseInt(deleteSpeedElement.children[1].value));
  configuration.blinkSpeed = Math.abs(parseInt(blinkSpeedElement.children[1].value));

  window.localStorage.setItem('config', JSON.stringify(configuration))
  window.location.reload()
  window.scrollTo(0, 0)
};

// const configurationElement = document.getElementById('configuration')
// const textWrapperElement = document.getElementById('text-wrapper')

// const addTexts = document.getElementById('add-text')

// function addText() {
//     const childrenTextWrapper = textWrapperElement.children
//     for(let i = 0; i < childrenTextWrapper.length; i++) {
//       texts.push(childrenTextWrapper[i].value)
//     }
//     const config = {
//       query: '#home > p',
//       texts,
//       typeSpeed: 100,
//       deleteSpeed: 20,
//       blinkSpeed:400,
//       isLoop: true,
//     }

//     window.localStorage.setItem('config', JSON.stringify(config))
//     window.location.reload()
//     window.scrollTo(0, 0)

// }

// addTexts.addEventListener('click', addText)

// addTexts.onclick = function() {

//   const typedScript = document.getElementById('typed-script')
//   typedScript ? document.body.removeChild(typedScript) : ''

//   console.log(typedScript)

// const newTypedScript = document.createElement('script')
// newTypedScript.setAttribute('id', 'typed-script')
// const textNode = document.createTextNode(`
//   const configuration = {
//     texts: [${texts.map(el => `"${el}"`)}],
//     query: '#home > p',
//     typeSpeed: 100,
//     deleteSpeed: 20,
//     blinkSpeed: 400,
//     isLoop: true
//   }

//   rizzzTyped(configuration)
//   console.log('asu')
// `)
// newTypedScript.appendChild(textNode)
// document.body.appendChild(newTypedScript)
// }

// const script = document.createElement('script')
// const textElement = document.createTextNode(`
//     console.log('asu')
//   `)
// script.appendChild(textElement)

// addTexts.onclick = function() {
//   const home = document.getElementById('home')
//   document.body.appendChild(script)
//   console.log(home)
//   home ? document.body.removeChild(home) : ''

// }

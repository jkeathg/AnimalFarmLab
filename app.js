// import functions

// reference needed DOM elements
const dogImage = document.getElementById('dog');
const dogAudio = document.getElementById('dogAudio');
const catImage = document.getElementById('cat');
const catAudio = document.getElementById('catAudio');
const tigerImage = document.getElementById('tiger');
const tigerAudio = document.getElementById('tigerAudio');

// const keyAction = {
//   e: { keydown: Action.dogAudio.play()},
//   w: { keydown: Action.catAudio.play()},
//   s: { keydown: Action.tigerAudio.play()}
// };


// set event listeners 
dogImage.addEventListener('click', () => {
  dogAudio.play();
});


window.addEventListener('keydown', (event) => {
  if (event.key === "d") {
    dogAudio.play();
  } else if (event.key === "c") {
    catAudio.play();
  } else if (event.key === "t") {
    tigerAudio.play();
  }
}
);

// window.addEventListener('keydown', (event) => {
//   if (event.key === "c") {
//     catAudio.play();
//   }
// }
// );

// window.addEventListener('keydown', (event) => {
//   if (event.key === "t") {
//     tigerAudio.play();
//   }
// }
// );


catImage.addEventListener('click', () => {
  catAudio.play();
});

tigerImage.addEventListener('click', () => {
  tigerAudio.play();
});

  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)

console.log('heyho');
const msgArray = ["WHY?", "Seriously??", "Looking for trouble?", "Stop it!", "Gosh.", "OH No You Didnt", "Duuuude?"]
let counter = 0

function changeText() {
  const elem = document.getElementById('noclick');
  elem.textContent = msgArray[Math.floor(Math.random() * msgArray.length)];
  counter++;
  if (counter % 10 === 0) {
    elem.textContent = "you clicked " + counter + " times";
  }
  // elem.value = "Open Curtain";
}
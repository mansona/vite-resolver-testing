import 'ember-cli-mirage/face';
import 'my-example-name';

export function setupCounter(element) {

  const thing = { face: 'yo'};

  
  let counter = 0
  const setCounter = (count) => {
    assign(thing, {face: count})
    counter = count
    element.innerHTML = `count is ${thing.face}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))

  setCounter(0)
}

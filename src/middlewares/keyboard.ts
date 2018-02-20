import * as keycode from 'keycode';

let auroraInstance;
let middlewareOptions;
let keysHolded;

const keydownHandler = (event: KeyboardEvent) => {
  const key = keycode(event);
  const keys = [];

  if (event.ctrlKey) keys.push('ctrl');
  if (event.shiftKey) keys.push('shift');
  if (event.altKey) keys.push('alt');

  if (!['ctrl', 'shift', 'alt'].includes(key)) {
    keys.push(key);
  }

  keysHolded = keys;

  console.log(keysHolded.join('+'));
};

const keyupHandler = (event: KeyboardEvent) => {
  keysHolded = keysHolded.filter((keyHolded: string) => keyHolded !== keycode(event));

  console.log(keysHolded.join('+'));
};

const initializeKeyboardMiddleware = (aurora) => {
  if (typeof window !== 'undefined') {
    auroraInstance = aurora;
    window.addEventListener('keydown', keydownHandler);
    window.addEventListener('keyup', keyupHandler);
  }
};

const deinitializeKeyboardMiddleware = () => {
  if (typeof window !== 'undefined') {
    auroraInstance = undefined;
    window.removeEventListener('keydown', keydownHandler);
    window.removeEventListener('keyup', keyupHandler);
  }
};

const keyboardMiddleware = (options) => {
  middlewareOptions = options;

  return {
    init: initializeKeyboardMiddleware,
    deinit: deinitializeKeyboardMiddleware,
  };
};

export default keyboardMiddleware;

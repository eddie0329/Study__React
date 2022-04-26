export const custom_debounce = (fn, time) => {
  let timer;
  return (...args) => {
    if (timer) return; /* guard  */
    else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = undefined;
        fn(...args);
      }, time);
    }
  };
};
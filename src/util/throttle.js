/**
 * Simple throttle function that executes a passed function only once in the specified timeout
 * @param handlerFunc The actualResizeHandler will execute at a rate of 15fps
 * @param [timeout] the throttle interval
 */
export function throttle(handlerFunc, timeout = 30*60*60*1000) {
  let resizeTimeout;
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      handlerFunc(); 
    }, timeout);
  }
}

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timeLimit
    return function(...args) {
        if(!timeLimit){
           return timeLimit = setTimeout(() => fn(...args), t)
        }else{
            clearTimeout(timeLimit)
            timeLimit = setTimeout(() => fn(...args), t)
        }
        
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
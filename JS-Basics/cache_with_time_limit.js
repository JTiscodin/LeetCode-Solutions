var TimeLimitedCache = function () {
  this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  for (const k of this.cache.keys()) {
    if (k === key) {
      let timeout = this.cache.get(key).timeLimit;
      clearTimeout(timeout);
      this.cache.set(key, {
        value,
        timeLimit: setTimeout(() => {
          this.cache.delete(key);
        }, duration),
      });
      return true;
    }
  }

  this.cache.set(key, {
    value,
    timeLimit: setTimeout(() => {
      this.cache.delete(key);
    }, duration),
  });

  return false;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if(this.cache.get(key)){
    return this.cache.get(key).value
  }else{
    return -1
  }
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  let count = 0;
  for (const v of this.cache.values()) {
    if (v.value != -1) {
      count++;
    }
  }
  return count;
};

const timeLimitedCache = new TimeLimitedCache();
timeLimitedCache.set(1, 42, 1000); // false
timeLimitedCache.get(1); // 42
console.log(timeLimitedCache.count()); // 1
console.log(timeLimitedCache.get(1)); // 42

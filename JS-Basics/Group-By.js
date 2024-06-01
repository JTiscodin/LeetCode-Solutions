/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  let arr = this;

  let finalObject = new Map();

  arr.forEach((e, i) => {
    let value = fn(e);
    if (finalObject.has(value)) {
      console.log("has the key" + value);
      let prevValue = finalObject.get(value);
      finalObject.set(value, [...prevValue, e]);
    } else {
      finalObject.set(value, [arr[i]]);
      console.log("set value");
    }
  });
  //   console.log(finalObject);
  let obj = Object.fromEntries(finalObject);
  console.log(obj);
  return finalObject;
};

[{ id: "1" }, { id: "1" }, { id: "2" }].groupBy(function (item) {
  return item.id;
}); // {"1":[1],"2":[2],"3":[3]}

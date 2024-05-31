/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let arr = s.split("");
  let ones = 0;
  let zeros = 0;
  let ans = 0;
  let group;
  arr.forEach((e, i) => {
    // if (e === "1") {
    //   ones += 1;
    // } else {
    //   zeros += 1;
    // }
    let same = (e ^ arr[i + 1]) === 1;
    if (arr[i + 1] && same) {
      ans += 1;
      console.log("plus", e, arr[i + 1], "index" + i);
    } else if (arr[i + 1] && !same) {
      console.log("answer not same ", e, arr[i + 1]);

      group = e + arr[i + 1];

      console.log("group" + group);
    


      let next = arr.slice(i + 2, Math.min( group.length + i + 2, arr.length) );

      

      if ( next[0] === next[1] &&  next.length >=1 && group ^ next.join("")) {
        console.log("grouped: " + group, next.join(""));
        ans += 1;
        group = "";
      }
    }
  });
  console.log(ans);
  console.log("01" ^ "10");
};

countBinarySubstrings("000111000");

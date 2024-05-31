/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let RomanValues = [
    { Symbol: "I", Value: 1 },
    { Symbol: "V", Value: 5 },
    { Symbol: "X", Value: 10 },
    { Symbol: "L", Value: 50 },
    { Symbol: "C", Value: 100 },
    { Symbol: "D", Value: 500 },
    { Symbol: "M", Value: 1000 },
  ];

  RomanValues.forEach((e,i) => {
    if(num >= e.Value && num < RomanValues[i+1].Value){
        console.log(e.Value, RomanValues[i+1].Value)
        let count = Math.floor(num/10)
        let temp = num;
        let symbol = ""
        for(let i=0; i<count; i++){
            temp -= e.Value;
            symbol += e.Symbol
        }
        console.log(symbol, temp)
    }
    
  })

  

  
};


intToRoman(34)

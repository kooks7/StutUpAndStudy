const get6 = require("./get6");
const randomNumbers = require("./pick6");

get6(800).then(data => {
  console.log(data.bnusNo);
  console.log(data.realNumbers);
  console.log(randomNumbers);
});

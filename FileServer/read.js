let fs = require('fs');

fs.readFile("LoremIpsun.txt", "UTF8", (error, data) => {
  if (error) {
    throw error
  } else {
    console.log(data)
  }
})
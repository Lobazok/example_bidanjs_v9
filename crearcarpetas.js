const fs = require("fs")

const numOfElement = 10;

fs.mkdir(`./data`, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Carpeta matrix creada exitosamente');
  }
});
for (let o = 0; o < numOfElement; o++) {
  fs.mkdir(`./data/gen${o}`, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Carpeta creada exitosamente');
    }
  });
}
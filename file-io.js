const fs = require('fs');

// Create a file named "welcome.txt" with content "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('File created successfully');
  }
});

// Read the content of "welcome.txt" and console.log it
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
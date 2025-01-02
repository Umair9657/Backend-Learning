
// Fie write kiya aur wo create hui
/*const fs = require('fs');
fs.writeFile('example.txt', 'Hello, Umair!', (err) => {
  if (err) throw err;
  console.log('File written successfully!');
});


 // yaha per file read hui jo create hui thi
/*const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data); // Prints the content of the file
});*/



// yaha per jo file create hui thi uss me aur data apend hua
/*const fs = require('fs');
fs.appendFile('example.txt', '\nNew line added!', (err) => {
  if (err) throw err;
  console.log('Data appended to file!');
});*/



// yaha per jo file create ki thi wo delete kardi 
/*const fs = require('fs');
fs.unlink('example.txt', (err) => {
  if (err) throw err;
  console.log('File deleted!');
});*/


// yaha per folder create kiya gaya
/*const fs = require('fs');
fs.mkdir('myFolder', (err) => {
  if (err) throw err;
  console.log('Folder created!');
});*/


// it shows how much files are there in directory
/*
const fs = require('fs');
fs.readdir('.', (err, files) => {
  if (err) throw err;
  console.log(files); // Prints an array of file names in the current directory
}); */ 

// rename files
/*const fs = require('fs')
fs.rename('hey.txt', "files.txt", (err) => {
  if (err) console.error(err);
  else console.log("Done");
  
})*/

// delete 

const fs = require('fs');

fs.unlink('hello.txt', (err) => {
  if(err) console.error(err)
    else console.log("deleted");
    
})

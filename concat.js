// Challenge Week 7
// Brian Newsom
// Script to concatenate files using nodejs
var fs = require('fs');

function append(file,toAppend){
  fs.readFile(toAppend, function read(err,data) {
    if (err) {
      throw err;
    }
    console.log("File Read successful");
    fs.appendFile(file, data, function (err) {
      if (err) {
        throw err;
      }
      console.log('Data appended to file');
    });
  });
}

// Async is okay here because order doesn't matter, we just need the data

file = './relevantData/headers.txt';
toAppend = './relevantData/20140921.export.CSV';
append(file,toAppend);

toAppend = './relevantData/20140922.export.CSV';
append(file,toAppend);

toAppend = './relevantData/20140923.export.CSV';
append(file,toAppend);

toAppend = './relevantData/20140924.export.CSV';
append(file,toAppend);

toAppend = './relevantData/20140925.export.CSV';
append(file,toAppend);

var fs   = require('fs');

var files = [
  'data/headers.csv',
  'data/20140920.export.CSV',
  'data/20140921.export.CSV',
  'data/20140922.export.CSV'
]

var wstream = fs.createWriteStream('climateSummit.csv');

files.forEach(function(file) {
  fs.readFile(file, function (err, data) {
    if (err) {
      console.log(err);
    } else{
      wstream.write(data);
    }
  });
});

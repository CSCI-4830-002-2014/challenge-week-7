var fs = require('fs');
var datafiles = [
	"./20141011.export.headers.csv",
	"./20140920.export.CSV",
	"./20140921.export.CSV",
	"./20140922.export.CSV",
	"./20140923.export.CSV",
	"./20140924.export.CSV",
	"./20140925.export.CSV",
	"./20140926.export.CSV",
	"./20140927.export.CSV",
]
var outstream = fs.createWriteStream("./gdelclimate.csv");
// datafiles.forEach(function(fname) {
// 	fs.readFile(fname, function(err,contents) {
// 	outstream.write(contents);
// 	});
// });
var i = 0;
for(i = 0; i<9;i = i+1)
{
	fs.readFile(datafiles[i], function(err,contents) {
	outstream.write(contents);
	});
}

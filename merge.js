var fs = require('fs');

mergedRead = fs.readFileSync('20140921.export.CSV') + fs.readFileSync('20140922.export.CSV') + fs.readFileSync('20140923.export.CSV');

fs.writeFile("merged.csv", mergedRead, function(err) {
	if(err) {
		console.log(err);
	} else {
		console.log("Success");
	}
});
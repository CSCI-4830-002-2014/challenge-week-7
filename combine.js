var fs = require('fs');

function combine(file, com){
	fs.readFile(com, function read(err, data){
		if(err){
			throw err;
		}
		console.log("FILE READ");
		fs.appendFile(file, data, function(err){
			if(err){
				throw err;
			}
			console.log("FILE ADDED");
		});
	});
}

file = "combined.txt";
com = "20140921.export.CSV";
combine(file, com);

com = "20140930.export.CSV";
combine(file, com);
	

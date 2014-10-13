fs = require('fs');

headerfile = 'CSV.header.dailyupdates.txt';
outfile = '201409.merge.CSV';
files = [];
for (i = 21; i <= 26; i++)
	files.push('201409' + i + '.export.CSV');

fs.writeFileSync(outfile, fs.readFileSync(headerfile));
for (i in files) {
	console.log("append " + files[i] + '...');
	fs.appendFileSync(outfile, fs.readFileSync(files[i]));
}

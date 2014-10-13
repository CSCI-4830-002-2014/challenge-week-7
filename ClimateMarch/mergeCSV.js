var fs = require( 'fs' );

// Have to specify encoding to read in as string
var headers = fs.readFileSync( 'CSV.header.dailyupdates.csv', { encoding: 'utf8' });
var dayBeforeMarches = fs.readFileSync( '20140922.export.CSV', { encoding: 'utf8' });
var dayOfMarches = fs.readFileSync( '20140923.export.CSV', { encoding: 'utf8' });
var dayAfterMarches = fs.readFileSync( '20140924.export.CSV', { encoding: 'utf8' });

// Combine files
var merged = headers + dayBeforeMarches + dayOfMarches + dayAfterMarches;

// Write to new file, merged.csv
fs.writeFile( 'merged.csv', merged, function ( err ) {
		if ( err ) {
			throw err;
		} else {
			console.log( 'Files Merged' );
		}
});
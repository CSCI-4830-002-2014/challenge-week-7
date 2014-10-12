var fs = require('fs');

var newfile = fs.readFileSync('headers.csv',{encoding: 'utf8'})+fs.readFileSync('20140921.export.csv',{encoding: 'utf8'})+fs.readFileSync('20140922.export.csv',{encoding: 'utf8'})+fs.readFileSync('20140924.export.csv',{encoding: 'utf8'})+fs.readFileSync('20140925.export.csv',{encoding: 'utf8'})


fs.writeFile("newfile.csv", newfile, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
}); 
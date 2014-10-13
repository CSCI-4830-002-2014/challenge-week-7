/** 
BORROWED FROM https://gist.github.com/dogpellet/3835034

 * Demonstration of using stream.pipe() in node.js to concatenate multiple
 * files together.
 *
 * pipe() allows you to connect a read stream to a write stream: so any
 * emitted from the input stream gets written to the write stream.
 *
 * When the input stream emits end() this is also piped to the output stream
 * which makes the output stream no longer writeable. To prevent this you
 * set the option on pipe() to keep the output stream open and writeable.
 */
var fs = require("fs")

var outStream = fs.createWriteStream("file_concat", {
  flags: "w",
  encoding: null,
  mode: 0666
});

function merge(file, onDone) {
  var inStream = fs.createReadStream(file, {
    flags: "r",
    encoding: null,
    fd: null,
    mode: 0666,
    bufferSize: 64*1024
  });
  inStream.on("end", onDone);
  outStream.write("\n\n");
  inStream.pipe(outStream, { end: false });
}

merge("20140921.export.CSV", function() {
  merge("20140922.export.CSV", function() {
    merge("20140923.export.CSV", function() {
      merge("20140924.export.CSV", function() {
        console.log("All done!");
        });
    });
  });
});
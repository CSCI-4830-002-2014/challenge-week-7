fs = require "fs"
files = [
  "summit_data/headers.csv"
  "summit_data/20140920.export.CSV"
  "summit_data/20140923.export.CSV"
  "summit_data/20140926.export.CSV"
]
wstream = fs.createWriteStream "summit_data.csv"
files.forEach (file) ->
  fs.readFile file, (err, data) ->
    if err
      console.log err
    else
      wstream.write data

#!/bin/bash

cat 20140810.export.CSV >> 20140913.export.CSV
cat 20140913.export.CSV >> 20140923.export.CSV
cat 20140923.export.CSV >> 20140924.export.CSV
cat 20140924.export.CSV >> 20141005.export.CSV

cat header| cat - 20141005.export.CSV | sponge 20141005.export.CSV

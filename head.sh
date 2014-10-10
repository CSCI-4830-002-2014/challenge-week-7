#replace the .csv with your file 
#you need to brew install moreutils if you are on a mac 
cat header| cat - 20141005.export.CSV | sponge 20141005.export.CSV
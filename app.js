const Compress = require('./compress');
var string = "aabcccccddd///dddaagggggddddllşşşşşşbbbbfgj%%%%%%%^^^^ddddd";
var cmpress = new Compress(string);
console.log("Compressed data: ", cmpress.data = cmpress.CompressData());
console.log("Decompressed data: ", cmpress.DecompressData());
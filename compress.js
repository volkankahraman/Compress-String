class Compress {

    constructor(data) {
        this.data = data;
    }

    CompressData() {
        var i = 0,
            count = 1,
            compressedString = '';
        var arr = this.data.split("");
        var prevChar = arr[i];
        for (i = 1; i < arr.length + 1; i++) {
            if (prevChar == arr[i])
                count++;
            else {
                compressedString += prevChar;
                if (count != 1)
                    compressedString += count;
                count = 1;
            }
            prevChar = arr[i];
        }
        return compressedString;
    }

    DecompressData() {
        var arr = this.data.split("");
        var i = 0,
            j, limit, deCompressString = '';
        var prevChar = arr[i];
        for (i = 1; i < arr.length; i++) {
            if (!isNaN(arr[i])) {
                if (!isNaN(arr[i + 1])) {
                    limit = Number(arr[i] + arr[i + 1]);
                    i++;
                } else
                    limit = Number(arr[i]);
                for (let j = 0; j < limit; j++) {
                    deCompressString += prevChar;
                }
            } else {
                if (isNaN(arr[i + 1])) {
                    deCompressString += arr[i];
                }
            }
            prevChar = arr[i];
        }
        return deCompressString;
    }
}
module.exports = Compress;
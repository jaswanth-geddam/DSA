/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
        for (let row of image) {
        row.reverse();
        for (let i = 0; i < row.length; i++) {
            row[i] = row[i] === 0 ? 1 : 0;
        }
    }

    return image;
};
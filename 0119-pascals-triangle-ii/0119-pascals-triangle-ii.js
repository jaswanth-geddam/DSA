/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(numRows) {
        const triangle = []
    for (let i = 0; i < numRows+1; i++) {
        const temp = []
        for (let j = 0; j <= i; j++) {
            if (j === 0 || i === j) {
                temp[j] = 1
            }
            else {
                temp[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
            }
        }
        triangle.push(temp)
    }

return triangle[numRows]
};
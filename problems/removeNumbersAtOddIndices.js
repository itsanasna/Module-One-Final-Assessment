/** Remove all numbers at odd indices from an array
* @param {number[]} arr - The input array
* @returns {number[]} - An array removing all elements initially appearing at an odd index
*/
const removeNumbersAtOddIndices = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if(i % 2 === 0) {
            newArr.push(arr[i])
        }
    }
    return newArr
}


module.exports = removeNumbersAtOddIndices
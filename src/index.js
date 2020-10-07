module.exports = function towelSort (matrix) {
  
  if (matrix && matrix.length !== 0) {
    return matrix.reduce((arr, item) => {

        return matrix.indexOf(item) !== 1 &&
        !(matrix.indexOf(item) % 2) ?
          arr.concat(item) :
          arr.concat(item.reverse())

    },[])
  }
  return [];
}
// You should implement your task here.





module.exports = function towelSort(matrix) {

  if (matrix instanceof Array) {
     
    } else {matrix = [];}

      

    for (let i = 1; i < matrix.length; i += 2) {
      matrix[i].reverse();
  }

  let result = [].concat(...matrix);

  return result;
};

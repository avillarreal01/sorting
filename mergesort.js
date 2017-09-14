function split(wholeArray) {
    var firstHalf = wholeArray.slice(0, wholeArray.length / 2);
    var secondHalf = wholeArray.slice(wholeArray.length / 2);
    return [firstHalf, secondHalf];
  }

  function merge(arr1, arr2){
    var output = [];
    while (arr1.length && arr2.length) {
      if (arr2[0] < arr1[0]) {
        output.push(arr2.shift());
      } else {
        output.push(arr1.shift());
      }
    }
    if (arr1.length) output = output.concat(arr1);
    if (arr2.length) output = output.concat(arr2);
    return output;
  }

  function mergeSort(array) {
    if (array.length > 1) {
      var arrLeft = split(array)[0];
      var arrRight = split(array)[1];
      return merge(mergeSort(arrLeft), mergeSort(arrRight));
    }
    return array;
  }

function split(wholeArray) {
    var firstHalf = wholeArray.slice(0, wholeArray.length / 2);
    var secondHalf = wholeArray.slice(wholeArray.length / 2);
    return [firstHalf, secondHalf];
  }

  function merge(left, right){
    var output = [],
        leftIndex = 0,
        rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        output.push(left[leftIndex]);
        leftIndex++;
      }
      else {
        output.push(right[rightIndex]);
        rightIndex++;
      }
    }
    for (; leftIndex < left.length; leftIndex++) output.push(left[leftIndex]);
    for (; rightIndex < right.length; rightIndex++) output.push(right[rightIndex]);
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

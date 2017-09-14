function split(wholeArray) {

    var firstHalf = wholeArray.slice(0, wholeArray.length/2);
    var secondHalf = wholeArray.slice(wholeArray.length/2);
    return [firstHalf, secondHalf];
  }

  function merge(arr1, arr2){
    var output = [];
    while(arr1.length && arr2.length){
      if(arr2[0] < arr1[0]){
        output.push(arr2.shift());
      } else {
        output.push(arr1.shift());
      }
    }
    if(arr1.length){
      output = output.concat(arr1);
    } else if (arr2.length){
      output = output.concat(arr2);
    }
    return output;
  }

  function mergeSort(array) {
    var output = [];
    var arr1 = split(array)[0];
    var arr2 = split(array)[1];
    if(arr1.length >= 1){
      output = mergeSort(arr1).concat(mergeSort(arr2));
    } else {
      output = merge(arr1, arr2);
    }
    return output;
    console.log(merge(arr1, arr2));
    }

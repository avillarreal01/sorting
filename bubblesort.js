function swap(arr, index) {
  var num1 = arr[index];
  var num2 = arr[index + 1];

  arr[index] = num2;
  arr[index + 1] = num1;

  return arr;
}

function bubbleSort(array) {
  var count = 1;
  while (count) {
    count = 0;
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array [i+1]) {
        array = swap(array, i);
        count++;
      }
    }
  }
  return array;
}

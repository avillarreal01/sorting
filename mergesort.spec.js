describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1,2,3,4])).toEqual([[1,2],[3,4]]);
  });
});

describe('Split Array function', function() {
  it('is able to split an odd array into two halves', function() {
    expect(split([1,2,3,4,5])).toEqual([[1,2],[3,4,5]]);
  });
});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([1],[2])).toEqual([1,2]);
  });
});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([1,3], [2,4])).toEqual([1,2,3,4]);
  });
});

describe('Mergesort', function(){
  it('fdsfdsfsdfsd', function(){
    expect(mergeSort([4,1,5,9,3,8])).toEqual([1,3,4,5,8,9])
  });
});

describe('Mergesort', function(){
  it('fdsfdsfsdfsd', function(){
    expect(mergeSort([1,4,5,9,3,1,8])).toEqual([1,1,3,4,5,8,9])
  });
});

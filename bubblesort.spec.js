//--------- Bubble Sort

//empty array
describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});

//single items
describe('Bubble Sort', function(){
  it('handles an array of length 1', function(){
    expect( bubbleSort([5]) ).toEqual( [5] );
  });
});

// multiple items
describe('Bubble Sort', function(){
  it('handles an array with multiple elements', function(){
    expect( bubbleSort([2, 3, 1]) ).toEqual( [1, 2, 3] );
  });
});

describe('Bubble Sort', function(){
  it('handles an array with multiple elements', function(){
    expect( bubbleSort([1, 3, 1, 5, 7]) ).toEqual( [1, 1, 3, 5, 7] );
  });
});


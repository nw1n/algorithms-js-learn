function insertionSortChatGpt(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    // Store the current element to be compared
    let currentElement = arr[i];
    
    // Start comparing with the elements before the current index
    let j = i - 1;
    
    // Move elements of arr[0..i-1] that are greater than currentElement to one position ahead of their current position
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }
    
    // Place the currentElement at its correct position in the sorted array
    arr[j + 1] = currentElement;
  }

  return arr;
}


function insertionSort(srcArr) {
  let round = 1;
  let isCompletedWithoutSwamp = false;
  while(isCompletedWithoutSwamp === false) {
    isCompletedWithoutSwamp = true
    for(let iOuter = 1; iOuter < srcArr.length; iOuter++) {
      const mainVal = srcArr[iOuter]
      for(let iInner = 1; iInner <= iOuter; iInner++) {
        const leftNeighborI = iOuter - iInner
        const leftNeighborVal = srcArr[leftNeighborI]
        if(mainVal < leftNeighborVal) {
          for(let shiftI = leftNeighborI; shiftI >= 0; shiftI--) {
            const temp = srcArr[shiftI + 1]
            srcArr[shiftI + 1] = srcArr[shiftI]
            srcArr[shiftI] = temp
            isCompletedWithoutSwamp = false;
          }
        } else {
          break;
        }
      }
    }
    console.log('Completed sort round: ' + round)
    round++;
  }
  return srcArr
}

const unsortedArr = [5,4,3,2,1,7,8,9,6,1,9,1]

console.log(insertionSort(unsortedArr))
/*
insertion sort
works something like this: you start with the left most element (skipp first) and then you compare it to its next
left neighbor. if it is bigger or equal than the left neighbor then don't do anything and go to the next number (the original element spot's right neighbor.)
if it's smaller go look to the next neighbor and so forth until you encounter a left-neighnor that is bigger or you reach the beginning of the array. at this
position insert the original value (save in tmp variable first for insertion) after you moved all elements between its new index and its original
index one index up in the array.
*/

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

function insertionSort2(arr) {
  let temp
  const n = arr.length
  let insertI
  for(let i = 1; i < n; i++) {
    temp = arr[i]
    insertI = i
    for(let j = i-1; j > -1; j--) {
      if(arr[j] > temp) {
        arr[j+1] = arr[j]
        insertI = j
      } else {
        break;
      }
    } 
    arr[insertI] = temp
  }
  return arr
}

function insertionSort3(arr) {
  const n = arr.length
  let temp
  let insertIndex
  let j

  for(let i = 1; i < n; i++) {
    temp = arr[i]
    j = i - 1;
    insertIndex = i

    while(j >= 0 && temp < arr[j]) {
      arr[j+1] = arr[j]
      insertIndex = j
      j--
    }
    arr[insertIndex] = temp
  }

  return arr
}

const unsortedArr = [2,9,1,4,2,7,1,8,2,3,1,9,2]

console.log(insertionSort3(unsortedArr.slice()))

//console.log(insertionSort(unsortedArr))
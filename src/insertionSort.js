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

// NW: Solution understood completely built myself
function insertionSort3(arr) {
  const n = arr.length

  for(let i = 1; i < n; i++) {
    // temp val needs to be stored to variable first, because otherwise we loose it when we shift the sorted array part on its left to the right.
    const temp = arr[i]

    // j starts with the first element to the leff of temp
    let j = i - 1;

    // while loop traveersing down the list.
    // we shift the smaller items from the sorted part on the left to the right into the spot where the temp element was
    // here it is important that we compare arr[j] with temp and not with arr[i], since it gets overwritten by the shift
    // we add "j >= 0" because we dont want to go out of array bounds.
    while(j >= 0 && temp < arr[j]) {
      arr[j+1] = arr[j]
      j--
    }

    // at the end we insert our temp element at the j position where was the last element we shifted to the right.
    // since we did a final j-- in the while loop we need to reverse this by using arr[j+1] instead of arr[j]
    arr[j+1] = temp 
  }

  return arr
}

const unsortedArr = [2,9,1,4,2,7,1,8,2,3,1,9,2]

console.log(insertionSort3(unsortedArr.slice()))

//console.log(insertionSort(unsortedArr))
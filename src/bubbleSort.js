/*
bubble sort idea:

walk throgh array starting at first item and compare with right neighbor
if right neighbor is smaller, switch places
then do the same again until sencond last element (there is no right neighbor for last element)
if the element was the largest element in the array it would be move ("bubbled up") to the last spot in the arrray
in first round since it always gets swapped again and again. If it another element along the way is bigger, then
the procedure would leave the first where it is and bubble up this next element.
So multiple rounds are usually necessary to finish all the sorting. (99% sure about this)
On each sort, the biggest element in the array will be moved to the end.
For each procedure we therefore have to go less far up the array. e.g. first until array.length-1, second array.length-2 etc.
Not sure how to best find out when done, maybe just use a isFinished bool that checks if any swaps have been done, if not exit loop.
About the isFinished bool: not sure if this makes sense. It makes the loop much faster if a list is already sorted, but maybe makes it slower
in wort case scenario. So maybe just drop this?
*/

function bubbleSort(srcArr) {
  const arr = srcArr.slice()
  let isFinished = false
  let end = arr.length - 1
  let tmp

  while (!isFinished) {
    isFinished = true
    if(end < 0) {
      break;
    }

    for(let i = 0; i < end; i++) {
      if(arr[i] > arr[i+1]) {
        isFinished = false
        tmp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = tmp
      }
    }
    console.log('end:', end)
    end = end - 1
  }

  return arr
}

// this is the chatGPT version of the function above.
function bubbleSortByChatGPT(srcArr) {
  const arr = srcArr.slice();
  let isSorted = false;
  let end = arr.length - 1;

  while (!isSorted && end >= 0) {
      isSorted = true;

      for (let i = 0; i < end; i++) {
          if (arr[i] > arr[i + 1]) {
              [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Destructuring for swapping
              isSorted = false;
          }
      }

      end = end - 1;
  }

  return arr;
}

const exampleArr = [1,2,3,4,5,6,7,8,9]

console.log(bubbleSort(exampleArr))



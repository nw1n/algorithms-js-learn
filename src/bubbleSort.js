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
function myBubbleSorImporvedByChatGPT(srcArr) {
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

function bubbleSortByChatGPT(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

// chatGPT approves of this version i made. just laments that a for-loop might be semanticly prettier than while loop.
function bubbleSort2(arr) {
  const n = arr.length
  let end = n - 1
  let temp

  while(end > 0) {
    for(let i = 0; i < end; i++) {
      if(arr[i] > arr[i+1]) {
        temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
      }
    }
    end--
  }
  return arr
}

/*
## chat gpts comment on my implementation bubbleSort2 compared to his

YOU:
is this true: bubbleSort2 aborts the swapping earlier on each iteration, while bubbleSort always checks the swapps on all elements,
even though it is unnecessary

ChatGPT:
Yes, your observation is correct. The key difference lies in how the two implementations handle the loop conditions and when they decide to stop
swapping. In bubbleSort, the inner loop always checks all elements in the unsorted portion of the array, even if the largest unsorted element has
already been moved to its correct position in the last iteration. This means that the algorithm performs unnecessary comparisons in each pass.

On the other hand, in bubbleSort2, the while loop condition checks if any swapping occurred during the current iteration (if (arr[i] > arr[i + 1])).
If no swapping occurs during an iteration, it means that the array is already sorted, and the algorithm can exit early.
This optimization can potentially make bubbleSort2 more efficient in terms of reducing the number of unnecessary comparisons.

So, bubbleSort2 can be seen as a slight improvement over bubbleSort in terms of early termination when the array is already sorted.
This improvement may make bubbleSort2 more efficient in certain cases, especially if the array is partially sorted or nearly sorted.
However, in the worst case (when the array is completely unsorted), both implementations have the same time complexity of O(n^2).

*/

const exampleArr = [7,3,2,8,1,9,3,1,9,4,7,2]

console.log(bubbleSort2(exampleArr))


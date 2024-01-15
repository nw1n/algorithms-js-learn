function binarySearchR(hayStack, needle, start = 0, end) {
  if(start > end) {
    return false // would be error
  }

  if(end === undefined) {
    end = hayStack.length
  }

  const middleIndex = Math.floor((start + end) / 2)

  if(hayStack[middleIndex] === needle) {
    return middleIndex
  }

  if(needle < hayStack[middleIndex]) {
    return binarySearchR(hayStack, needle, start, middleIndex - 1)
  }
  if(needle > hayStack[middleIndex]) {
    return binarySearchR(hayStack, needle, middleIndex + 1, end)
  }
}

function binarySearchLoop(hayStack, needle) {
  let start = 0;
  let end = hayStack.length
  let middleIndex

  while(true) {
    middleIndex = Math.floor((end + start) / 2)
    let middleValue = hayStack[middleIndex]

    if(middleValue === needle) {
      return middleIndex
    }

    if(needle < middleValue) {
      end = middleIndex - 1
    } else {
      start = middleIndex + 1
    }
    console.log('middleIndex:', middleIndex);
    console.log('start:', start);
    console.log('end:', end);
  }
}

function binarySearchLoop2(hayStack, needle) {
  let start = 0
  let end = hayStack.length
  let middleIndex

  while(true) {
    middleIndex = Math.floor((end + start) / 2) // seems weird at first, but makes sense. last element would be (10+10) / 20

    const middleValue = hayStack[middleIndex]

    if(middleValue === needle) {
      return middleIndex
    }

    if(middleValue < needle) {
      start = middleIndex + 1
    } else {
      end = middleIndex - 1
    }

    if(end <= start) {
      return undefined
    }
  }
}

const exampleArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

console.log('result')
console.log(binarySearchLoop2(exampleArr, 19))

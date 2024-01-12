function binarySearchR(hayStack, needle, start = 0, end) {
  //for (let i = 0; i < hayStack.length; i++) {
  //  const item = hayStack[i]
  //  if(needle === item) {
  //    return i;
  //  }
  //}

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
    //console.log(middleIndex)
    return binarySearchR(hayStack, needle, start, middleIndex - 1)
  }
  if(needle > hayStack[middleIndex]) {
    //console.log(middleIndex)
    return binarySearchR(hayStack, needle, middleIndex + 1, end)
  }
}










function binarySearchLoop(hayStack, needle) {
  let start = 0;
  let end = hayStack.length
  let middleIndex

  while(true) {
    middleIndex = Math.floor((end + start) / 2)
    let middleItem = hayStack[middleIndex]

    if(middleItem === needle) {
      return middleIndex
    }

    if(needle < middleItem) {
      end = middleIndex - 1
    } else {
      start = middleIndex + 1
    }
    console.log('middleIndex:', middleIndex);
    console.log('start:', start);
    console.log('end:', end);
  }
}






const exampleArr = [1,2,3,4,5,6,7,8,9,10]

console.log('result')
console.log(binarySearchLoop(exampleArr, 10))
//console.log(binarySearch(exampleArr, 1))
//console.log(binarySearch(exampleArr, 4))
//console.log(binarySearch(exampleArr, 5))
//console.log(binarySearch(exampleArr, 6))
//console.log(binarySearch(exampleArr, 10))

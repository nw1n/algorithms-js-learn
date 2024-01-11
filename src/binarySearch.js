function binarySearch(hayStack, needle, start = 0, end) {
  //for (let i = 0; i < hayStack.length; i++) {
  //  const item = hayStack[i]
  //  if(needle === item) {
  //    return i;
  //  }
  //}

  if(end === undefined) {
    end = hayStack.length
  }

  const middleIndex = start + Math.floor(end / 2)

  if(hayStack[middleIndex] === needle) {
    return middleIndex
  }

  if(needle < hayStack[middleIndex]) {
    console.log(middleIndex)
    return binarySearch(hayStack, needle, middleIndex, middleIndex)
  }
  if(needle > hayStack[middleIndex]) {
    console.log(middleIndex)
    return binarySearch(hayStack, needle, middleIndex, end)
  }
}

const exampleArr = [1,2,3,4,5,6,7,8,9,10]

console.log(binarySearch(exampleArr, 9))

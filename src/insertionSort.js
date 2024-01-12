function insertionSort(srcArr) {
  for(let i = 0; i < 99; i++) {
    for(let iOuter = 1; iOuter < srcArr.length; iOuter++) {
      const mainVal = srcArr[iOuter]
      for(let iInner = 1; iInner < iOuter; iInner++) {
        const leftNeighborI = iOuter - iInner
        const leftNeighborVal = srcArr[leftNeighborI]
        if(mainVal < leftNeighborVal) {
          for(let shiftI = leftNeighborI; shiftI >= 0; shiftI--) {
            srcArr[shiftI + 1] = srcArr[shiftI]
            srcArr[shiftI] = mainVal
          }
        } else {
          break;
        }
        console.log('leftNeighborVal')
        console.log(leftNeighborVal)
      }
    }
  }
  return srcArr
}

const unsortedArr = [4,3,1,8,9,2,3,5,1,8,1,2]

console.log(insertionSort(unsortedArr))
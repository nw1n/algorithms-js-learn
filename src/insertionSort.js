function insertionSort(srcArr) {
  for(let i = 0; i < 99; i++) {
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

const unsortedArr = [5,4,3,2,1,7,8,9,6,1,9,1]

console.log(insertionSort(unsortedArr))
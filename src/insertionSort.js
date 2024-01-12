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
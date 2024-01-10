function fibonacci(n) {
  const arr = []
  let result = 1
  let prev = 0
  let temp = 0
  for(let i = 0; i < n; i++) {
    if(i === 0) {
      arr.push(0)
      continue
    } else if(i === 1 ) {
      arr.push(1)
      continue
    }
    temp = result
    result += prev
    prev = temp
    arr.push(result)
  }
  return arr
}

console.log(fibonacci(2))




function sortSequence(sequence){
  let index = 0
  const newSequence = sequence.reduce((a, b, i, arr) => {
    let result
    if (b === 0) {
      result = [
        ...a,
        arr.slice(index, i)
      ]
      index = i + 1
    } else {
      result = a
    }
    return result
  }, [])
  .map((x, index) => {
      return {
        arr: x.sort((a, b) => a - b),
        sum: x.reduce((a, b) => a += b, 0),
        index,
      }
    })
  const sortedSequence = [...newSequence].sort((a, b) => {
    if (a.sum > b.sum) return 1
    if (a.sum < b.sum) return -1
    return a.index - b.index
  })
  return sortedSequence.reduce((a, b) =>  [...a, ...b.arr, 0] ,[]) 
}
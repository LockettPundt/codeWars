// You will be given an array of strings. The words in the array should mesh
// together where one or more letters at
// the end of one word will have the same letters (in the same order) as
// the next word in the array. But, there are times when all the words won't mesh.

// this solution sucks but it works....


function wordMesh(arr) {
  const results = arr.reduce((result, x, index, a) => {
    const nextWord = a[index + 1] || '';
    let temp = '';
    for (let i = 0; i < x.length; i++) {
      const currentSlice = x.slice(-(i));
      if (nextWord.slice(0, i) === currentSlice) {
        temp = currentSlice;
      }
    }
    return [...result, temp];
  }, []);
  return results.slice(0, -1).every((x) => !!x) ? results.join('') : 'failed to mesh';
}

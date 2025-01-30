function selReverse(array: number[], length: number): number[] {
    if (length <= 1) {
      return array;
    }
    let reversedArray: number[][] = [];
    for (let i = 0; i < array.length; i += length) {
      reversedArray.push(
        array.slice(i, i + length).reverse()
      )
    }
    return reversedArray.flat();
}
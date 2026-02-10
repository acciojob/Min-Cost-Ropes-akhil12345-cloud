let cost = 0;

function sortedArr(unSortedArray) {
  unSortedArray.sort((a, b) => {
    return a - b;
  });

  minCost(unSortedArray);
}
sortedArr(arr);

function minCost(arr) {
  if (arr.length > 1) {
    let minimum = arr[0] + arr[1];
    cost += minimum;
    arr.shift()
    arr.shift()

    arr.push(minimum);
    sortedArr(arr);
  } else {
    return cost;
  }
}
console.log(minCost(arr));

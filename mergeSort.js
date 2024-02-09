function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; 
    }
    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);

    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    return merge(sortedLeft, sortedRight);
}
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
  
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
const unsortedArray = [64, 25, 12, 22, 11,44,56,78];
console.log("Unsorted Array:", unsortedArray);

const sortedArray = mergeSort(unsortedArray);

console.log("Sorted Array:", sortedArray);

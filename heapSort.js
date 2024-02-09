function heapSort(arr) {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        heapify(arr, i);
    }
    for (let i = arr.length - 1; i > 0; i--) {
      
        const temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, 0);
    }
}
function heapify(arr, i) {
    let largest = i; 
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < arr.length && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < arr.length && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== i) {
        const temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;

        heapify(arr, largest);
    }
}

const unsortedArray = [64, 25, 12, 22, 11];
console.log("Unsorted Array:", unsortedArray);

heapSort(unsortedArray);

console.log("Sorted Array:", unsortedArray);

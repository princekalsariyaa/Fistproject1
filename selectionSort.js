function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {

        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }


        const temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}


const unsortedArray = [64, 25, 12, 22, 11];
console.log("Unsorted Array:", unsortedArray);

selectionSort(unsortedArray);

console.log("Sorted Array:", unsortedArray);

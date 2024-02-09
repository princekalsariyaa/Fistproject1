// 3. Insertion Sort
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {

        const currentElement = arr[i];

         let j = i - 1;

        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = currentElement;
    }
}


const unsortedArray = [64, 25, 12, 22, 11,59,78];
console.log("Unsorted Array:", unsortedArray);

insertionSort(unsortedArray);

console.log("Sorted Array:", unsortedArray);

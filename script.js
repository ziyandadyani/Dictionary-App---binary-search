// Binary Search Function
function binarySearch() {
  // Get the target value from the input field
  const targetElement = document.getElementById("target");
  const targetValue = parseInt(targetElement.value);

  // Sorted array (change as needed)
  const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Binary Search Algorithm
  let low = 0;
  let high = sortedArray.length - 1;
  let found = false;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midValue = sortedArray[mid];

    if (midValue === targetValue) {
      found = true;
      break;
    } else if (midValue < targetValue) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  // Display the result
  const resultElement = document.getElementById("result");
  if (found) {
    resultElement.textContent = `${targetValue} found in the array.`;
  } else {
    resultElement.textContent = `${targetValue} not found in the array.`;
  }
}

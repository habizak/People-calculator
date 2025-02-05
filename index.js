// 📌 Get references to the HTML elements
let countEl = document.getElementById("countNum"); // The number displayed in the counter
let saveEl = document.getElementById("totalCount"); // The saved total count
let count = 0; // Initialize the count to 0

// 📌 Function to decrease the counter (but not below 0)
function decrease() {
  if (count > 0) { // Only decrease if count is greater than 0
    count -= 1; // Subtract 1 from count
    countEl.innerText = count; // Update the displayed count
  }
}

// 📌 Function to increase the counter
function increment() {
  count += 1; // Add 1 to count
  countEl.innerText = count; // Update the displayed count
}

// 📌 Function to save the current count to history
function save() {
  let previousCount = parseInt(saveEl.innerText) || 0; // Get the previous saved number (default to 0 if empty)
  let newTotal = previousCount + count; // Add current count to the previous saved total

  saveEl.innerText = newTotal; // Update the displayed total count in history
  count = 0; // Reset the counter after saving
  countEl.innerText = count; // Reset the displayed counter
}

function reset() {
  saveEl.innerText = "0";
}
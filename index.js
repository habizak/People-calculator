let countEl = document.getElementById("countNum");
let saveEl = document.getElementById("historyCount");
let count = 0

function decrease() {
  if (count > 0) {
  count -= 1
  countEl.innerText = count
  }
}

function increment() {
  count += 1
  countEl.innerText = count
}

function save() {
  let previousCount = parseInt(saveEl.innerText) || 0; // Get previous count (default to 0)
  let newTotal = previousCount + count; // Add current count to previous total

  saveEl.innerText = newTotal; // Update history display
  count = 0; // Reset count
  countEl.innerText = count; // Reset the counter display
}
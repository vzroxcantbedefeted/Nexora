function processText() {
  const input = document.getElementById("inputText").value;
  const output = document.getElementById("outputText");

  if (!input.trim()) {
    output.innerText = "⚠️ Please enter text first.";
    return;
  }

  // simple clean logic (placeholder for AI later)
  const result = input
    .split(".")
    .filter(s => s.trim())
    .map(s => "• " + s.trim())
    .join("\n");

  output.innerText = result;

  // little animation feel
  output.style.opacity = 0;
  setTimeout(() => output.style.opacity = 1, 100);
}
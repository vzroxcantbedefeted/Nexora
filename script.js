function processText() {
  const input = document.getElementById("inputText").value;
  const output = document.getElementById("outputText");

  if (!input.trim()) {
    output.innerText = "⚠️ Enter some text first.";
    return;
  }

  // fake AI (for now)
  let result = input
    .split(".")
    .map(s => s.trim())
    .filter(s => s.length > 0)
    .map(s => "• " + s)
    .join("\n");

  output.innerText = result || "No output generated.";
}
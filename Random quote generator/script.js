const quotes = [
    "Believe in yourself!",
    "Stay hungry. Stay foolish.",
    "Every moment is a fresh beginning.",
    "You are stronger than you think.",
    "Dream big and dare to fail."
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
  }
  
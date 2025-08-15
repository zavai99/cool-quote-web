const quotes = [
  "Simplicity is elegance.",
  "Minimalism is the ultimate sophistication.",
  "Glass reflects your thoughts.",
  "Design with clarity and soul.",
  "Smooth code, smooth life."
];

const quote = document.getElementById('quote');
const btn = document.getElementById('btn');
btn.addEventListener('click', ()=>{
  quote.style.opacity=0;
  setTimeout(()=>{
    quote.textContent = quotes[Math.floor(Math.random()*quotes.length)];
    quote.style.opacity=1;
  },300);
});

const quotes = [
  "Future is neon bright!",
  "Code like a cyberpunk.",
  "Neon dreams, real schemes.",
  "Hacker mind, smooth grind.",
  "Glow up your code!"
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

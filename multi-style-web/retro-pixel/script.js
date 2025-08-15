const quotes = [
  "8-bit life!",
  "Pixel by pixel, code builds.",
  "Retro vibes, modern minds.",
  "Jump and grab the code!",
  "Old school, new rules."
];

const quote = document.getElementById('quote');
const btn = document.getElementById('btn');
btn.addEventListener('click', ()=>{
  quote.style.opacity=0;
  setTimeout(()=>{
    quote.textContent = quotes[Math.floor(Math.random()*quotes.length)];
    quote.style.opacity=1;
  },200);
});

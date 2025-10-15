// Minimal interactions: mobile menu + fake order submit
document.getElementById('mobile-menu-btn').addEventListener('click', ()=>{
  const nav = document.querySelector('.nav');
  if(nav.style.display==='block') nav.style.display=''; else nav.style.display='block';
});

document.querySelectorAll('.buy-btn').forEach(b=>{
  b.addEventListener('click', (e)=>{
    const plan = e.currentTarget.dataset.plan;
    alert('You chose: ' + plan + " — replace this with your Tebex/Stripe link or checkout flow.");
  })
});

document.getElementById('order-form').addEventListener('submit', (e)=>{
  e.preventDefault();
  alert('Order sent — replace this with your server-side form handler or Zapier integration.');
  e.target.reset();
});

const yearEl = document.getElementById('year'); if(yearEl) yearEl.textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle'); const mainNav = document.getElementById('mainNav');
if(navToggle && mainNav){
  navToggle.addEventListener('click', ()=> mainNav.classList.toggle('open'))
  document.querySelectorAll('#mainNav a').forEach(a=> a.addEventListener('click', ()=> mainNav.classList.remove('open')))
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href'); if(href === '#') return;
    const el = document.querySelector(href); if(!el) return;
    e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'});
  })
});
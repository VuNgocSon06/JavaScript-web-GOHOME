
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    const targetId=this.getAttribute('href');
    if(targetId && targetId!="#"){
      e.preventDefault();
      const target=document.querySelector(targetId);
      if(target) target.scrollIntoView({behavior:'smooth'});
    }
  });
});
const contactForm=document.getElementById('contact-form');
if(contactForm){
  contactForm.addEventListener('submit',function(e){
    e.preventDefault();
    const email=contactForm.querySelector('input[type="email"]').value;
    const phone=contactForm.querySelector('input[type="tel"]').value;
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex=/^[0-9\-\+]{7,15}$/;

    if(!emailRegex.test(email)){ alert('Please enter a valid email!'); return; }
    if(!phoneRegex.test(phone)){ alert('Please enter a valid phone number!'); return; }

    alert('Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất.');
    contactForm.reset();
  });
}
const navLinks=document.querySelectorAll('.navbar-nav .nav-link');
const navbarCollapse=document.querySelector('.navbar-collapse');
navLinks.forEach(link=>{
  link.addEventListener('click',()=>{
    if(navbarCollapse.classList.contains('show')) new bootstrap.Collapse(navbarCollapse).toggle();
  });
});
const fadeElements = document.querySelectorAll('.fade-in');
const fadeInOnScroll = () => {
  fadeElements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) el.classList.add('visible');
  });
};
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);
const carousel = document.querySelector('.testimonial-carousel');
let scrollAmount = 0;
function autoScrollCarousel() {
  if (carousel) {
    scrollAmount += 1;
    if(scrollAmount > carousel.scrollWidth - carousel.clientWidth) scrollAmount = 0;
    carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }
}
setInterval(autoScrollCarousel, 50); 
const yearSpan=document.getElementById('year');
if(yearSpan) yearSpan.textContent=new Date().getFullYear();
const backToTop=document.getElementById('backToTop');
window.addEventListener('scroll',()=>{ backToTop.style.display = window.scrollY>300?'block':'none'; });
backToTop.addEventListener('click',()=> window.scrollTo({top:0,behavior:'smooth'}));
const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
document.querySelectorAll('.view-details').forEach(btn=>{
  btn.addEventListener('click', e=>{
    e.preventDefault();
    const card=btn.closest('.card');
    document.getElementById('modalTitle').textContent=card.dataset.name;
    document.getElementById('modalBody').innerHTML=`
      <p><strong>Type:</strong> ${card.dataset.type}</p>
      <p><strong>Address:</strong> ${card.dataset.address}</p>
      <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <img src="${card.querySelector('img').src}" class="img-fluid rounded mt-2">
    `;
    projectModal.show();
  });
});
const searchInput=document.getElementById('searchInput');
const filterType=document.getElementById('filterType');
const projectCards=document.querySelectorAll('#projectCarousel .card');
const filterProjects=()=>{
  const searchText=searchInput.value.toLowerCase();
  const typeFilter=filterType.value;
  projectCards.forEach(card=>{
    const name=card.dataset.name.toLowerCase();
    const type=card.dataset.type;
    card.parentElement.style.display = (name.includes(searchText) && (typeFilter==="" || typeFilter===type)) ? 'block' : 'none';
  });
};
searchInput.addEventListener('input',filterProjects);
filterType.addEventListener('change',filterProjects);

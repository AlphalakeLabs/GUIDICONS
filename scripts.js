// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
  
  // Handle button click on the Hero section
  document.querySelector('.cta-button').addEventListener('click', () => {
    document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
  });
  
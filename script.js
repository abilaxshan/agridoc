// Toggle mobile nav
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('nav-menu_visible');
});

// Smooth scroll for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({behavior:'smooth'});
  });



document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.document-item');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const docPath = card.getAttribute('data-doc');
      if (docPath) {
        window.open(docPath, '_blank');
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.document-item, .presentation-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const filePath = item.getAttribute('data-doc') || item.getAttribute('data-file');
      if (filePath) {
        window.open(filePath, '_blank');
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.document-item, .presentation-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const filePath = item.getAttribute('data-doc') || item.getAttribute('data-file');
      if (filePath) {
        window.open(filePath, '_blank');
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.document-item, .presentation-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const filePath = item.getAttribute('data-doc') || item.getAttribute('data-file');
      if (filePath) {
        window.open(filePath, '_blank');
      }
    });
  });
});


});

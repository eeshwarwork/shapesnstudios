
/**
 * Shapes n' Shades Design Studio
 * Main JavaScript file
 */

document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Navbar shrink functionality
  var mainNav = document.getElementById('mainNav');
  
  function navbarShrink() {
    if (!mainNav) {
      return;
    }
    if (window.scrollY === 0) {
      mainNav.classList.remove('navbar-shrink');
    } else {
      mainNav.classList.add('navbar-shrink');
    }
  }
  
  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);
  
  // Shrink the navbar when page is loaded if not at the top
  navbarShrink();
  
  // Collapse responsive navbar when toggler is visible
  var navbarToggler = document.querySelector('.navbar-toggler');
  var responsiveNavItems = document.querySelectorAll('#navbarResponsive .nav-link');
  
  if (navbarToggler) {
    responsiveNavItems.forEach(function(responsiveNavItem) {
      responsiveNavItem.addEventListener('click', function() {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
          navbarToggler.click();
        }
      });
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 72, // Adjust for navbar height
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Initialize portfolio filters with Isotope
  var portfolioContainer = document.querySelector('.portfolio-container');
  if (portfolioContainer) {
    var iso = new Isotope(portfolioContainer, {
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });
    
    document.querySelectorAll('.portfolio-filters button').forEach(button => {
      button.addEventListener('click', function() {
        document.querySelector('.portfolio-filters .active').classList.remove('active');
        this.classList.add('active');
        
        var filterValue = this.getAttribute('data-filter');
        if (filterValue === '*') {
          iso.arrange({ filter: '*' });
        } else {
          iso.arrange({ filter: filterValue });
        }
      });
    });
  }
  
  // Form submission handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
      };
      
      // Here you would typically send the data to your server
      console.log('Form submitted:', formData);
      
      // Show success message (in a real app, do this after successful AJAX)
      const submitButton = document.getElementById('submitButton');
      const originalText = submitButton.innerHTML;
      
      submitButton.innerHTML = 'Message Sent!';
      submitButton.disabled = true;
      
      // Reset form after delay
      setTimeout(() => {
        contactForm.reset();
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        alert('Thank you for your message! We will get back to you soon.');
      }, 2000);
    });
  }
  
  // Newsletter form submission
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value;
      
      console.log('Newsletter signup:', email);
      
      // Show success message
      newsletterForm.reset();
      alert('Thank you for subscribing to our newsletter!');
    });
  }
});

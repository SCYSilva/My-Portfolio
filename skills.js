const skillBars = document.querySelectorAll('.skill-per');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active'); // start animation
      observer.unobserve(entry.target); // run once
    }
  });
}, { threshold: 0.5 }); // 50% visible

skillBars.forEach(bar => observer.observe(bar));

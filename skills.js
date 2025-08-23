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


// script.js
document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".outercircle");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let outercircle = entry.target;
        let progress = outercircle.getAttribute("data-progress");
        let angle = (progress / 100) * 360; // convert % → degrees

        let current = 0;
        let step = 3; // smaller = smoother but slower

        let animate = setInterval(() => {
          if (current >= angle) {
            clearInterval(animate);
          } else {
            current += step;
            outercircle.style.setProperty("--angle", current + "deg");
          }
        }, 15); // interval speed (ms)

        obs.unobserve(outercircle); // run once
      }
    });
  }, { threshold: 0.6 });

  circles.forEach(outercircle => observer.observe(outercircle));
});

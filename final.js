
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const section = entry.target;
        section.querySelector('.year')?.classList.add('animate');
        section.querySelector('.month')?.classList.add('animate');
        section.querySelector('.day')?.classList.add('animate');
        observer.unobserve(section); // 한 번만 실행되게
      }
    });
  }, {
    threshold: 0.5  // 절반 이상 보이면 작동
  });

  observer.observe(document.querySelector('.section-date'));

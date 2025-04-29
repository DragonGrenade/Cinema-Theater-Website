document.querySelectorAll('.faq_question').forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const icon = question.querySelector('.arrow-icon');
  
      if (answer.classList.contains('visible')) {
        // COLLAPSE
        answer.style.maxHeight = answer.scrollHeight + 'px'; // Set initial height
        requestAnimationFrame(() => {
          answer.style.maxHeight = '0px';
        });
        answer.classList.remove('visible');
        icon.textContent = '+';
      } else {
        // EXPAND
        answer.classList.add('visible');
        answer.style.maxHeight = '0px'; // Reset to 0 first
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            answer.style.maxHeight = answer.scrollHeight + 'px';
          });
        });
        icon.textContent = '–';
  
        // Clean up after transition
        answer.addEventListener('transitionend', function handler() {
          answer.style.maxHeight = 'none'; // let it expand naturally now
          answer.removeEventListener('transitionend', handler);
        });
      }
    });
  });
  
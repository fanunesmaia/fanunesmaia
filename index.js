  window.addEventListener('scroll', function() {
    var currentSection = document.querySelector('.section:target') || document.querySelector('.section:first-of-type');
    if (currentSection.id === 'first') {
      document.querySelector('.fixed-bottom').style.display = 'none';
    } else {
      document.querySelector('.fixed-bottom').style.display = 'block';
    }
  });
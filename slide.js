document.addEventListener("DOMContentLoaded", function() {
  var textJourney = document.getElementById('textJourney');
  
  window.addEventListener('scroll', function() {
    if (isElementInViewport(textJourney) && !textJourney.classList.contains('show')) {
      textJourney.classList.add('show');
    }
  });

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight &&
      rect.bottom >= 0
    );
  }
});



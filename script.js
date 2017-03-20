document.addEventListener('DOMContentLoaded', function() {
  var numberOfDroplets = 20;
  function createDroplet(input) {
    var dropletContainer = document.querySelector('.droplet-container');
    dropletContainer.insertAdjacentHTML('afterbegin', '<div class="droplet"></div>');
    var droplet = dropletContainer.firstChild;
    droplet.style.left = input.left + '%';
    droplet.style['animation-delay'] = input.delay + 's';
    droplet.style.opacity = input.opacity;
  }
  for (var i = 0; i < numberOfDroplets; i++) {
    var left = parseInt(Math.random() * 100);
    var delay = Math.random().toFixed(3) * 4;
    var opacity = Math.random().toFixed(2);
    console.log(left + ' ' + delay);
    createDroplet({
      left: left,
      delay: delay,
      opacity: opacity
    });
  }
})

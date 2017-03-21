document.addEventListener('DOMContentLoaded', function() {

  var numberOfDroplets = 120;
  var numberOfSnowflakes = 50;

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
    var delay = Math.random().toFixed(3) * 3;
    var opacity = Math.random().toFixed(2) * 0.5;

    createDroplet({
      left: left,
      delay: delay,
      opacity: opacity
    });
  }

  function createSnowflake(input) {
    var snowflakeContainer = document.querySelector('.snowflake-container');
    snowflakeContainer.insertAdjacentHTML('afterbegin', '<div class="snowflake"></div>');
    var snowflake = snowflakeContainer.firstChild;
    snowflake.style.left = input.left + '%';
    snowflake.style.width = input.size + 'px';
    snowflake.style.height = input.size + 'px';
    snowflake.style['animation-delay'] = input.delay + 's';
    snowflake.style['animation-duration'] = input.snowFallDuration + 's, ' + input.snowDriftDuration + 's';
    snowflake.style.opacity = input.opacity;
  }

  for (var i = 0; i < numberOfSnowflakes; i++) {
    var left = parseInt(Math.random() * 100);
    var size = Math.floor(Math.random() * 11 + 5);
    var delay = Math.random().toFixed(3) * 10;
    var snowFallDuration = Math.floor(Math.random() * 5 + 10);
    var snowDriftDuration = Math.floor(Math.random() * 4 + 4);
    var opacity = Math.random().toFixed(2) * 0.7;

    createSnowflake({
      left: left,
      size: size,
      delay: delay,
      snowFallDuration: snowFallDuration,
      snowDriftDuration: snowDriftDuration,
      opacity: opacity
    });
  }
});

const es = document.querySelectorAll('.grid-item a');

es.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    elem.preventDefault;
    console.log(elem);
  });
});

$('.front').click(function () {
  $(this).parent().toggleClass('flipped');
  window.navigator.vibrate(200);
});

$('.back').click(function () {
  $(this).parent().toggleClass('flipped');
  window.navigator.vibrate(200);
});

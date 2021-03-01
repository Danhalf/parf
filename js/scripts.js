const es = document.querySelectorAll('.grid-item a');

es.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    elem.preventDefault;
    console.log(elem);
  });
});

$('.front').click(function () {
  $(this).parent().toggleClass('flipped');
});

$('.back').click(function () {
  $(this).parent().toggleClass('flipped');
});

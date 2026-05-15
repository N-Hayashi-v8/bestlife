$(function () {
  var hash = window.location.hash;
  if (hash && $(hash).length) {
    $('html, body').scrollTop(0);
    setTimeout(function () {
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600);
    }, 0);
  }

  $('a[href*="#"]:not([href="#"])').on('click', function (e) {
    var target = $(this.hash);
    if (target.length) {
      e.preventDefault();
      history.pushState(null, '', this.hash);
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 600);
    }
  });
});

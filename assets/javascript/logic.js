$(window).scroll(function () {
  var header = $(document).scrollTop();
  var headerHeight = $(".header").outerHeight();
  var firstSection = $(".portfolio div:nth-of-type(1)").outerHeight();
  if (header > headerHeight) {
    $(".header").addClass("fixed");
  } else {
    $(".header").removeClass("fixed");
  }
  if (header > firstSection) {
    $(".header").addClass("in-view");
  } else {
    $(".header").removeClass("in-view");
  }
});

$('body').scrollspy({ target: '#navbar-example' })
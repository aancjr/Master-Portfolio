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

var cards = $('.item-size');
var maxHeight = 0;

for (var i = 0; i < cards.length; i++) {
  if (maxHeight < $(cards[i]).outerHeight()) {
    maxHeight = $(cards[i]).outerHeight();
  }
};

for (var i = 0; i < cards.length; i++) {
  $(cards[i]).height(maxHeight);
};

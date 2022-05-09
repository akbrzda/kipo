if (setTimeout(10), $(window).width() > "968") {
	var i = setTimeout((function () {}), 0);
	$(".has-dropdown > a, .topbar__dropdown-box").hover((function () {
		$(".hover").removeClass("hover topbar__menu-item--active"), $(".topbar__dropdown-box").css("min-height", "0"), $(this).parent().addClass("hover topbar__menu-item--active"), $(this).parent().find(".topbar__dropdown-box").css("min-height", $(this).parent().find(".topbar__dropdown-box").data("height")), clearTimeout(i)
	}), (function () {
		var e = $(this);
		clearTimeout(i), i = setTimeout((function () {
			$(".hover").removeClass("hover topbar__menu-item--active"), e.parent().find(".topbar__dropdown-box").css("min-height", "0")
		}), 200)
	})), $(".topbar__dropdown-box").click((function () {
		clearTimeout(i)
	}))
} else $(".has-dropdown > a").click((function () {
	return $(this).parent().hasClass("hover") ? ($(this).parent().removeClass("hover topbar__menu-item--active"), $(this).parent().find(".topbar__dropdown-box").css("min-height", "0")) : ($(".hover .topbar__dropdown-box").css("min-height", "0"), $(".hover").removeClass("hover topbar__menu-item--active"), $(this).parent().addClass("hover topbar__menu-item--active"), $(this).parent().find(".topbar__dropdown-box").css("min-height", $(this).parent().find(".topbar__dropdown-box").data("height"))), !1
}));


$(".stages__list-item").on("click", function (e) {
	e.preventDefault;
	$(".stages__list-item").removeClass("active");
	$(this).addClass("active");
});

$('.partners__list').slick({
	slidesToShow: 5,
	slidesToScroll: 5,
	prevArrow: $('.slider-prev'),
	nextArrow: $('.slider-next')
});
$('.slider__list').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: $('.slider-prev'),
	nextArrow: $('.slider-next')
});
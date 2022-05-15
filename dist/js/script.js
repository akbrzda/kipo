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

if (setTimeout(10), $(window).width() > "968") {
	var i = setTimeout((function () {}), 0);
	$(".has-dropdown > a, .submenu__box").hover((function () {
		$(".hover").removeClass("hover menu__bottom-item--active"), $(".submenu__box").css("min-height", "0"), $(this).parent().addClass("hover menu__bottom-item--active"), $(this).parent().find(".submenu__box").css("min-height", $(this).parent().find(".submenu__box").data("height")), clearTimeout(i)
	}), (function () {
		var e = $(this);
		clearTimeout(i), i = setTimeout((function () {
			$(".hover").removeClass("hover menu__bottom-item--active"), e.parent().find(".submenu__box").css("min-height", "0")
		}), 200)
	})), $(".submenu__box").click((function () {
		clearTimeout(i)
	}))
} else $(".has-dropdown > a").click((function () {
	return $(this).parent().hasClass("hover") ? ($(this).parent().removeClass("hover menu__bottom-item--active"), $(this).parent().find(".submenu__box").css("min-height", "0")) : ($(".hover .submenu__box").css("min-height", "0"), $(".hover").removeClass("hover menu__bottom-item--active"), $(this).parent().addClass("hover menu__bottom-item--active"), $(this).parent().find(".submenu__box").css("min-height", $(this).parent().find(".submenu__box").data("height"))), !1
}));

$(".stages__list-item").on("click", function (e) {
	e.preventDefault;
	$(".stages__list-item").removeClass("active");
	$(this).addClass("active");
});

var swiper = new Swiper(".slider__list", {
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	speed: 500,
	loop: true,
	navigation: {
		nextEl: ".slider-next",
		prevEl: ".slider-prev",
	},
	on: {
		init: function () {
			$(".swiper-progress-bar").removeClass("animate");
			$(".swiper-progress-bar").removeClass("active");
			$(".swiper-progress-bar").eq(0).addClass("animate");
			$(".swiper-progress-bar").eq(0).addClass("active");
		},
		slideChangeTransitionStart: function () {
			$(".swiper-progress-bar").removeClass("animate");
			$(".swiper-progress-bar").removeClass("active");
			$(".swiper-progress-bar").eq(0).addClass("active");
		},
		slideChangeTransitionEnd: function () {
			$(".swiper-progress-bar").eq(0).addClass("animate");
		},
		slideChange: function () {
			var currentSlide = this.realIndex + 1;
			document.querySelector('.ns-active').innerHTML = currentSlide;
		},
	}
});
$('.swiper-container').hover(function () {
	swiper.autoplay.stop();
	$('.swiper-progress-bar').removeClass('animate');
}, function () {
	swiper.autoplay.start();
	$('.swiper-progress-bar').addClass('animate');
});
var allSlides = $('.slider__list-item').length;
$('.ns-total').html('' + allSlides);

$(document).ready(function () {
	var swiper2 = new Swiper(".partners__list", {
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		speed: 500,
		spaceBetween: 12,
		loop: true,
		breakpoints: {
			720: {
				slidesPerView: 1,
				spaceBetweenSlides: 12
			},
			999: {
				slidesPerView: 5,
				spaceBetweenSlides: 12
			}
		},
		navigation: {
			nextEl: ".partners-next",
			prevEl: ".partners-prev"
		},
		on: {
			init: function () {
				$(".swiper-progress-bar2").removeClass("animate");
				$(".swiper-progress-bar2").removeClass("active");
				$(".swiper-progress-bar2").eq(0).addClass("animate");
				$(".swiper-progress-bar2").eq(0).addClass("active");
			},
			slideChangeTransitionStart: function () {
				$(".swiper-progress-bar2").removeClass("animate");
				$(".swiper-progress-bar2").removeClass("active");
				$(".swiper-progress-bar2").eq(0).addClass("active");
			},
			slideChangeTransitionEnd: function () {
				$(".swiper-progress-bar2").eq(0).addClass("animate");
			},
			slideChange: function () {
				var currentSlide2 = this.realIndex + 1;
				document.querySelector('.ns-active2').innerHTML = currentSlide2;
			},
		}
	});
	$('.swiper-container2').hover(function () {
		swiper.autoplay.stop();
		$('.swiper-progress-bar2').removeClass('animate');
	}, function () {
		swiper.autoplay.start();
		$('.swiper-progress-bar2').addClass('animate');
	});
});
var allSlides2 = $('.partners__list-item').length;
$('.ns-total2').html(' ' + allSlides2);


const burger = document.querySelector(".burger-menu");
const menu = document.querySelector(".mmenu");
const body = document.body;

burger.addEventListener("click", mobileMenu);

function mobileMenu() {
	burger.classList.toggle("active");
	menu.classList.toggle("active");
	body.classList.toggle("hidden");
}

const searchBtn = document.querySelector(".header__search-btn");
const searchBox = document.querySelector(".header__search")
searchBtn.addEventListener("click", headerSearch);

function headerSearch() {
	searchBtn.classList.toggle("active");
	searchBox.classList.toggle("active");
}
/*-------------------------------------------
		Preloader
--------------------------------------------- */
$(window).on("load", function () {
	setTimeout(function () {
		$('.page-loader-wrapper').fadeOut();
	}, 50);
});
$(document).ready(function () {
	"use strict"; // Start of use strict
	/*-------------------------------------------
			Aos animation
	--------------------------------------------- */
	AOS.init({
		// once: true,
		// whether animation should happen only once - while scrolling down
	});
	/*-------------------------------------------
			To Top
	--------------------------------------------- */
	$('body').append('<div id="toTop" class="btn-top"><i class="fa-solid fa-arrow-up"></i></div>');
	$(window).scroll(function () {
		if ($(this).scrollTop() !== 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').on('click', function () {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});
	/*-------------------------------------------
			Navbar
	--------------------------------------------- */
	//navbar add remove calss
	var header = $(".fixed-top");
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll >= 1) {
			header.removeClass('navbar-transfarent').addClass("navbar-bg");
		} else {
			header.removeClass("navbar-bg").addClass('navbar-transfarent');
		}
	});

	// Navbar Logo Hide Show
	var logo = $(".no-logo");
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll >= 73) {
			logo.removeClass('no-logo').addClass("has-logo");
		} else {
			logo.removeClass("has-logo").addClass('no-logo');
		}
	});

	// Navbar collapse hide
	$(".navbar-collapse .collapse-close").on("click", function () {
		$(".navbar-collapse").collapse("hide");
	});
	/*-------------------------------------------
			Background image
	--------------------------------------------- */
	$(".bg-img-hero").css("backgroundImage", function () {
		var bg = "url(" + $(this).data("image-src") + ")";
		return bg;
	});
	/*-------------------------------------------
			Counter
	--------------------------------------------- */
	$('.counter').counterUp({
		delay: 1,
		time: 500,
	});
	/*-------------------------------------------
		 Popup Youtube & Gallery
	--------------------------------------------- */
	$(".popup-youtube").magnificPopup({
		type: "iframe",
		mainClass: "mfp-fade",
		removalDelay: 160,
		preloader: false,
		fixedContentPos: true
	});
	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function (item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function (element) {
				return element.find('img');
			}
		}
	});
	/*-------------------------------------------
		 Ratting 
	--------------------------------------------- */
	$('.raty').raty({
		score: 5,
		path: 'assets/plugins/raty/images'
	});
	/*-------------------------------------------
		 Select 2 
	--------------------------------------------- */
	$('.select2').select2({
		theme: 'bootstrap-5'
	});
	/*-------------------------------------------
		 Range Slider
	--------------------------------------------- */
	$(".js-range-slider").ionRangeSlider({
		skin: "round",
		type: "double",
		min: 0,
		max: 1000,
		from: 0,
		to: 1000,
		prefix: "$"
	});
	/*-------------------------------------------
		 Theia Sticky Sidebar
	--------------------------------------------- */
	$(".content, .sidebar").theiaStickySidebar({
		additionalMarginTop: 90
	});
	/*-------------------------------------------
			 Datepicker
		--------------------------------------------- */
	$('.datepicker').datepicker({
		autoclose: true
	});
	/*-------------------------------------------
		 Owl Carousel
	--------------------------------------------- */
	$('.blog-carousel').owlCarousel({
		loop: true,
		margin: 20,
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 4
			}
		}
	});
	//Blog carousel
	$('.masonry-carousel').owlCarousel({
		loop: true,
		margin: 5,
		items: 2,
		dots: false,
		center: true,
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1000: {
				items: 2
			}
		}
	});
	/*-------------------------------------------
		 Slick Carousel
	--------------------------------------------- */
	$(".main-img-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		arrows: true,
		speed: 300,
		lazyLoad: "ondemand",
		asNavFor: ".thumb-nav"
	});
	$(".thumb-nav").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		infinite: false,
		vertical: true,
		centerPadding: "0px",
		asNavFor: ".main-img-slider",
		dots: false,
		centerMode: true,
		draggable: false,
		speed: 200,
		focusOnSelect: true,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			}
		}, {
			breakpoint: 1024,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 5
			}
		}, {
			breakpoint: 800,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		}]
	});
	/*-------------------------------------------
				 Toggle Password
			--------------------------------------------- */
	$(".password + .far").on("click", function () {
		$(this).toggleClass("fa-eye").toggleClass("fa-eye-slash");
		$(".password").togglePassword();
	});
	$(".c-password + .far").on("click", function () {
		$(this).toggleClass("fa-eye").toggleClass("fa-eye-slash");
		$(".c-password").togglePassword();
	});
	/*-------------------------------------------
			Input Spinner 
	--------------------------------------------- */
	$(".input-spinner span").on("click", function () {
		var $input = $(this).parents(".input-spinner").find("input.in-num");
		if ($(this).hasClass("minus")) {
			var count = parseFloat($input.val()) - 1;
			count = count < 1 ? 1 : count;
			if (count < 2) {
				$(this).addClass("dis");
			} else {
				$(this).removeClass("dis");
			}
			$input.val(count);
		} else {
			var count = parseFloat($input.val()) + 1;
			$input.val(count);
			if (count > 1) {
				$(this).parents(".input-spinner").find(".minus").removeClass("dis");
			}
		}
		$input.change();
		return false;
	});
	/*-------------------------------------------
		 Sidebar Filters
	--------------------------------------------- */
	$('.layer, .offcanvas-close').on('click', function () {
		$('.offcanvas-search').removeClass('show');
		$('.layer').removeClass('layer-is-visible');
	});
	$('.btn-offcanvas__search').on('click', function () {
		$('.offcanvas-search').addClass('show');
		$('.layer').addClass('layer-is-visible');
		$('.collapse.in').toggleClass('in');
	});
	$('.layer, .offcanvas-close').on('click', function () {
		$('.offcanvas-filters').removeClass('show');
		$('.layer').removeClass('layer-is-visible');
	});
	$('.btn-offcanvas__filters').on('click', function () {
		$('.offcanvas-filters').addClass('show');
		$('.layer').addClass('layer-is-visible');
		$('.collapse.in').toggleClass('in');
	});
	/*--------------------------------------------
		 Country Select Dropdown
	--------------------------------------------- */
	function countryDropdown(seletor) {
		var Selected = $(seletor);
		var Drop = $(seletor + '-drop');
		var DropItem = Drop.find('li');
		Selected.click(function () {
			Selected.toggleClass('open');
			Drop.toggle();
		});
		Drop.find('li').click(function () {
			Selected.removeClass('open');
			Drop.hide();
			var item = $(this);
			Selected.html(item.html());
		});
		DropItem.each(function () {
			var code = $(this).attr('data-code');
			if (code != undefined) {
				var countryCode = code.toLowerCase();
				$(this).find('i').addClass('flagstrap-' + countryCode);
			}
		});
	}
	countryDropdown('#country');
	/*-------------------------------------------
		 Tooltip
	--------------------------------------------- */
	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
	const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
	/*-------------------------------------------
		 Popover
	--------------------------------------------- */
	const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
	const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
});
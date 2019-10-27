$(document).ready(function () {

	// Скролл по якорю
	$(".js-menu-link").on("click", function () {

        // e.preventDefault();
       	var id  = $(this).attr('href'),
        	top = $(id).offset().top;

        $('.menu').removeClass('active');
        $('.mob-btn').removeClass('active');
        $('body,html').animate({scrollTop: top}, 1500);

    });

	// mob menu
	$('.mob-btn').on('click',function () {
		$(this).toggleClass('active');
		$('.menu').toggleClass('active');
	});

	// Подсказка
	$('.features__ico').on('click', function () {
		$('.features__item').removeClass('active');
		$(this).closest('.features__item').addClass('active');
	});

	$('.features__item .close').on('click', function () {
		$(this).closest('.features__list').find('.features__item').removeClass('active');
	});

	// slider
	$('.practice-slider').slick({
		prevArrow: '<span class="prev-arrow arrow"></span>',
		nextArrow: '<span class="next-arrow arrow"></span>'
	});

	$('.faq-slider').slick({
		prevArrow: '<span class="prev-arrow arrow"></span>',
		nextArrow: '<span class="next-arrow arrow"></span>',
		adaptiveHeight: true
	});

	$('.status__slider').slick({
		vertical: true,
		slidesToShow: 3,
		infinite: false,
		appendArrows: '.status-slider__arrows',
		prevArrow: '<span class="prev-arrow arrow"></span>',
		nextArrow: '<span class="next-arrow arrow"></span>'
	});

	$('.offer__slider').slick({
		vertical: true,
		slidesToShow: 4,
		infinite: false,
		appendArrows: '.offer__slider__arrows',
		prevArrow: '<span class="prev-arrow arrow"></span>',
		nextArrow: '<span class="next-arrow arrow"></span>',
		focusOnSelect: true,
		centerMode: true,
		responsive: [
			{
				breakpoint: 767,
				settings: "unslick"
			}
		]
	});

	// Range
	$( function() {
		$( "#slider-range" ).slider({
			range: "min",
			min: 1000,
			max: 1000000,
			value: 30000,
			slide: function( event, ui ) {
				$( "#amount" ).val( ui.value );
			}
		});
		$( "#amount" ).val( $( "#slider-range" ).slider( "value") );
	} );

	// callback
	$('.js--calback-link').on('click',function (e) {
		e.preventDefault();

		$('#overlay').show();
		$('.callback').addClass('active');
	});

	$('#overlay').on('click',function (e) {
		e.preventDefault();

		$('#overlay').hide();
		$('.callback').removeClass('active');
	});

	// Анимация заголовка
	$('.animation-title').typeIt({
		strings: ["выгодно", "интересно", "безопасно", "удобно"],
		speed: 100,
		breakLines: false,
        loop: true

	});



})
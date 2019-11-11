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
		$('.menu, .lk-menu').toggleClass('active');
	});

	// Подсказка
	$('.js--tip-link').on('click', function () {
		$('.js--tip-link').removeClass('active');
		$(this).addClass('active');
	});

	$('.close').on('click', function (e) {
		e.stopPropagation()
		$('.js--tip-link').removeClass('active');
	});


	// slider
	$('.practice-slider').slick({
		prevArrow: '<span class="prev-arrow arrow"></span>',
		nextArrow: '<span class="next-arrow arrow"></span>',
		infinite: false
	});

	$('.faq-slider').slick({
		prevArrow: '<span class="prev-arrow arrow"></span>',
		nextArrow: '<span class="next-arrow arrow"></span>',
		adaptiveHeight: true,
		infinite: false
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
			max: 30000000,
			value: 30000,
			slide: function( event, ui ) {
				$( "#amount" ).val( ui.value );
			}
		});
		$( "#amount" ).val( $( "#slider-range" ).slider( "value") );
	} );

	$( function() {
		$( "#slider-range2" ).slider({
			range: "min",
			min: 1,
			max: 30,
			value: 1,
			slide: function( event, ui ) {
				$( "#amount2" ).val( ui.value );
			}
		});
		$( "#amount2" ).val( $( "#slider-range2" ).slider( "value") );
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

	// ПсевдоСелект
	$('.select').on('click','.placeholder',function(){
		var parent = $(this).closest('.select');
		if ( ! parent.hasClass('is-open')){

			$(this).parents('.input-wrapper').addClass('focus');
			parent.addClass('is-open');
			$('.select.is-open').not(parent).removeClass('is-open');
		}else{
			parent.removeClass('is-open');
			$(this).parents('.input-wrapper').removeClass('focus');
		}
	}).on('click','ul>li',function(){
		var parent = $(this).closest('.select');
		$(parent).parents('.input-wrapper').removeClass('focus');
		parent.removeClass('is-open').find('.placeholder .text').text( $(this).text() );
		parent.find('input[type=hidden]').attr('value', $(this).attr('data-value') );
	});

	// Diagram. Hover effect
	 $('.sector').hover(function () {
	 	$('.js--status-green').addClass('active');
	 },function () {
	 	$('.js--status-green').removeClass('active');
	 });

	 $('.circle-diagram-body').hover(function () {
	 	$('.js--status-red').addClass('active');
	 },function () {
	 	$('.js--status-red').removeClass('active');
	 });

	 $('.circle-diagram--inverse .sector').hover(function (){
	 	$('.js--status-green').removeClass('active');
	 	$('.js--status-red').addClass('active');
	 },function () {
	 	$('.js--status-red').removeClass('active');
	 });

	 $('.circle-diagram--inverse .circle-diagram-body').hover(function () {
	 	$('.js--status-red').removeClass('active');
	 	$('.js--status-green').addClass('active');
	 },function () {
	 	$('.js--status-green').removeClass('active');
	 });

	 // Просто демонстрация работы текста-подсказки в калькуляторе
	 $('.js--tip-btn').on('click', function (e) {
	 	e.preventDefault();

	 	$('.tip-container').addClass('active');
	 })

})
jQuery(function ($) {

	$(document).ready(function() {
		
		"use strict";
		
		PageLoad(); 
		ScrollEffects();
		Sliders(); 
		FirstLoad(); 
		PageLoadActions(); 
		InfinityLists();
		FitThumbScreenGSAP();		 
		FitThumbScreenWEBGL();				
		Shortcodes();			
		Core();
		JustifiedGrid();
		Lightbox();
		ContactForm();	
		PlayVideo();
		ContactMap();
		CustomFunction();
	});
	
/*--------------------------------------------------
Function CustomFunction
---------------------------------------------------*/

	function CustomFunction() {
		
		//Add here your custom js code
		
	}// End CustomFunction	

/*--------------------------------------------------
Function Page Load
---------------------------------------------------*/

	function PageLoad() {
		
		gsap.set($(".menu-timeline .before-span"), {y: 120, opacity:0});
		
		// Page Navigation Events
		$(".preloader-wrap").on('mouseenter', function() {	
			var $this = $(this);			
			gsap.to('#ball', {duration: 0.3, borderWidth: '2px', scale: 1.2, borderColor:$("body").data('primary-color'), backgroundColor:$("body").data('primary-color')});
			gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 2, left: 2});
			$( "#ball" ).append( '<p class="first">' + $this.data("firstline") + '</p>' + '<p>' + $this.data("secondline") + '</p>' );				
		});
							
		$(".preloader-wrap").on('mouseleave', function() {					
			gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
			gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
			$('#ball p').remove();				
		});		
		
		$('body').removeClass('hidden').removeClass('hidden-ball');
		
		gsap.to($("#header-container"), {duration: 0.5, opacity:1, delay:0.2, ease:Power2.easeOut}); 
		
		
		function initOnFirstLoad() {
		
			$('body').waitForImages({
				finished: function() {
					gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
					gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
					$('#ball p').remove();
					gsap.to($(" .trackbar, .percentage-intro, .percentage"), {duration: 0.3, force3D:true, opacity:0, y:-10, delay:0, ease:Power2.easeIn});						
					gsap.to($(".preloader-wrap"), {duration: 1, yPercent: -101, delay:0.6, ease:Power2.easeInOut});
					gsap.set($(".preloader-wrap"), {visibility:'hidden', delay:1.7, opacity:0});					
					setTimeout(function(){
						$('body').waitForImages({
							finished: function() {
								gsap.to($(".header-middle, #footer-container, .showcase-counter, .swiper-pagination-bullet-active .counter"), {duration: 1, opacity:1, delay:0, ease:Power2.easeOut}); 										
							},
							waitForAll: true
						});
						
						if( $('.hero-video-wrapper').length > 0 ){
							$('#hero-image-wrapper').find('video').each(function() {
								$(this).get(0).play();
							}); 
						}
						
						gsap.to($("#main"), {duration: 0, opacity:1, delay:0, ease:Power2.easeOut});//modified time
						if( $('#hero').hasClass("has-image")) {	
							if ($('body').hasClass('hero-below-caption')) {
								var heroTranslate = $('.hero-translate').height();
								gsap.set($("#hero-image-wrapper"), {y:heroTranslate});
							}
							gsap.to($("#hero-bg-image"), {duration: 1, force3D:true, scale:1 , opacity:1, delay:0.2, ease:Power2.easeOut});							
							gsap.to($(".hero-title span"), {duration: 1, force3D:true, y: 0, opacity:1, rotation:0, delay:0.6, ease:Power2.easeOut});
							gsap.to($(".hero-subtitle span"), {duration: 1, force3D:true, y:0, opacity:1, rotation:0, delay:0.8, ease:Power2.easeOut});
							gsap.to($(".hero-footer-left"), {duration: 1, force3D:true, y: 0, opacity:1, rotation:0, delay:1.1, ease:Power2.easeOut});
							gsap.to($(".hero-footer-right"), {duration: 1, force3D:true, y:0, opacity:1, rotation:0, delay:1.2, ease:Power2.easeOut});																				
							gsap.to($("#main-page-content"), {duration: 0.4, opacity:1, delay:1.15, ease:Power2.easeOut});
						} else {
							// Fading In Small Carousel elements on Finised
							var tlHerospan = gsap.timeline();
							tlHerospan.set($("#hero .hero-title span"), {y: 120, opacity:0});
							$("#hero .hero-title span").each(function(index, element) {
								tlHerospan.to(element, {duration: 0.7, y:0, opacity:1, delay:0.7, ease:Power3.easeOut}, index * 0.03)
							});
							gsap.to($(".hero-subtitle span"), {duration: 0.4, force3D:true, y: 0, opacity:1, rotation:0, delay:0.5, ease:Power2.easeOut});
							gsap.to($(".hero-footer-left"), {duration: 0.7, force3D:true, y: 0, opacity:1, rotation:0, delay:1, ease:Power2.easeOut});
							gsap.to($(".hero-footer-right"), {duration: 0.7, force3D:true, y:0, opacity:1, rotation:0, delay:1.1, ease:Power2.easeOut});									
							gsap.to($("#main-page-content, #page-nav"), {duration: 0.7, opacity:1, delay:1.1, ease:Power2.easeOut});
							gsap.to($(".error-button"), {duration: 0.4, y: 0, opacity:1, rotation:0, delay:1, ease:Power2.easeOut});				
						}	
						
						
						// Fading In Showcase Slider elements on Finised
						gsap.set($("#showcase-slider-holder"), {opacity:0});															
						gsap.to($("#showcase-slider-holder"), {duration: 0.7, opacity:1, delay:0.6, ease:Power2.easeOut});
						
						gsap.to($("#showcase-slider-holder .swiper-slide .slide-title span"), {duration: 1, force3D:true, y: 0, opacity:1, delay:0.8, ease:Power2.easeOut});
						gsap.to($("#showcase-slider-holder .swiper-slide .subtitle span"), {duration: 0.7, force3D:true, y: 0, opacity:1, delay:1.2, ease:Power2.easeOut});
						
						// Fading In Showcase Carousel elements on Finised
						gsap.set($("#showcase-carousel-holder"), {opacity:0});															
						gsap.to($("#showcase-carousel-holder"), {duration: 0.7, opacity:1, delay:0.6, ease:Power2.easeOut});
						var slideWidth = $("#showcase-carousel-holder .swiper-slide").width();
						gsap.set($("#showcase-carousel-holder .swiper-slide-active").prev(), {x:slideWidth, scale:0.8, opacity:0});
						gsap.set($("#showcase-carousel-holder .swiper-slide-active").next(), {x:-slideWidth, scale:0.8, opacity:0});								
						gsap.to($("#showcase-carousel-holder .swiper-slide-active").prev(), {duration: 2, x:0, scale:1, delay:0.2, opacity:1, ease:Power3.easeInOut});
						gsap.to($("#showcase-carousel-holder .swiper-slide-active").next(), {duration: 2, x:0, scale:1, delay:0.2, opacity:1, ease:Power3.easeInOut});								
						gsap.to($("#showcase-carousel-holder .swiper-slide .slide-title span"), {duration: 0.3, force3D:true, y: 0, opacity:1, delay:0, ease:Power2.easeOut});
						gsap.to($("#showcase-carousel-holder .swiper-slide .subtitle span"), {duration: 0.3, force3D:true, y: 0, opacity:1, delay:0, ease:Power2.easeOut});
						
						
						gsap.set($(".swiper-prev, .swiper-next, .swiper-pagination-bullet"), {opacity:0});	
						gsap.to($(".swiper-prev"), {duration: 0.7, force3D:true, y: 0, opacity:1, rotation:0, delay:1.2, ease:Power2.easeOut});
						gsap.to($(".swiper-pagination-bullet"), {duration: 0.7, force3D:true, y:0, opacity:1, rotation:0, delay:1, ease:Power2.easeOut});
						gsap.to($(".swiper-next"), {duration: 0.7, force3D:true, y: 0, opacity:1, rotation:0, delay:1.2, ease:Power2.easeOut});
						setTimeout( function(){	
							$('#showcase-slider-holder, #showcase-carousel-holder, .showcase-list-holder').addClass("loaded");
						} , 1500 );
						var tlSmallTitles = gsap.timeline();					
						$(".slide-small-title span").each(function(index, element) {
							tlSmallTitles.to(element, {duration: 0.5, force3D:true, y:0, opacity:1, delay:1, ease:Power2.easeOut}, index * 0.05)
						});
						
						
						
						var SlideListTitle = gsap.timeline();					
						$(".sl-title span, .split-title span").each(function(index, element) {
							SlideListTitle.to(element, {duration: 0.7, force3D:true, y:0, opacity:1, delay:0.5, ease:Power2.easeOut}, index * 0.05)
						});
						
						var SlideListSubtitle = gsap.timeline();					
						$(".sl-subtitle span, .split-subtitle span").each(function(index, element) {
							SlideListSubtitle.to(element, {duration: 0.7, force3D:true, y:0, opacity:1, delay:0.6, ease:Power2.easeOut}, index * 0.05)
						});
							
						setTimeout( function(){
							$('.slide-list').addClass('show-borders')
						} ,300 );
							
						setTimeout( function(){	
							$('body').removeClass("load-project-page").removeClass("load-project-page-carousel");
						} , 600 );
						
						setTimeout( function(){	
							$('body').removeClass("load-next-project");
							$('body').addClass("header-visible");
							$('#showcase-holder').removeClass("disabled");
						} , 1600 );
						
						setTimeout( function(){	
							$('body').removeClass("show-loader")
						} , 800 );	
						
					} , 600 );
				},
			waitForAll: true
		});
				
		}
		
		
		if (!$('body').hasClass("disable-ajaxload")) {
			
			var width = 100,
				perfData = window.performance.timing, 
				EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
				time = ((EstimatedTime/100)%500) * 10
				
			// Loadbar Animation
			$(".loadbar").animate({
				width: width + "%"
			}, time  );	
			
			// Percentage Increment Animation
			var PercentageID = $("#precent"),
					start = 0,
					end = 100,
					durataion = time + 0;
					animateValue(PercentageID, start, end, durataion);
					
			function animateValue(id, start, end, duration) {
			  
				var range = end - start,
				  current = start,
				  increment = end > start? 1 : -1,
				  stepTime = Math.abs(Math.floor(duration / range)),
				  obj = $(id);
				
				var timer = setInterval(function() {
					current += increment;
					$(obj).text(current);
				  //obj.innerHTML = current;
					if (current == end) {
						clearInterval(timer);
					}
				}, stepTime);
			}
			
			// Fading Out Loadbar on Finised
			setTimeout(function(){
				$('.loadbar').append('<span class="hold-progress-bar"></span>');
				
				gsap.to($('.hold-progress-bar'), {duration: 0.3, force3D:true,width:'100%', delay:0, ease:Power2.easeOut, onComplete:function(){ 
					initOnFirstLoad();				
				}});
		  
			}, time);
		
		} else {
			
			initOnFirstLoad();
		}
		
		
	}// End Page Load

	
	
/*--------------------------------------------------
Page Load Actions
---------------------------------------------------*/	
	
		function PageLoadActions() {
		
		
		// Default Page Navigation Load Events
		$("#page-nav .page-title").on('mouseenter', function() {	
			var $this = $(this);			
			gsap.to('#ball', {duration: 0.3, borderWidth: '2px', scale: 1.2, borderColor:$("body").data('primary-color'), backgroundColor:$("body").data('primary-color')});
			gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 2, left: 2});
			$( "#ball" ).append( '<p class="first">' + $this.data("firstline") + '</p>' + '<p>' + $this.data("secondline") + '</p>' );				
		});
							
		$("#page-nav .page-title").on('mouseleave', function() {					
			gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
			gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
			$('#ball p').remove();				
		});				
		
		if (!$("body").hasClass("disable-ajaxload")) {
			$('#page-nav .page-title').on('click', function() {					
				$("body").addClass("load-next-page");
				$("body").addClass("show-loader");
				$('header').removeClass('white-header');
				$("#app").remove();
				$(".big-title-caption").remove();	
					
				gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball p').remove();
				$('#ball i').remove();
				
				if ($("body").hasClass("smooth-scroll")) {
					var navmove = $("#content-scroll").height() - $("#page-nav").height() - $("footer").height() 			
				} else {
					var navmove = window.innerHeight - $("#page-nav").height() - $("footer").height()	   
				}
				
				gsap.to($("#main-page-content, #hero"), {duration: 0.3, opacity:0});		
				gsap.to($("#page-nav"), {duration: 0.7, y: - navmove, delay:0, ease:Power2.easeInOut});
				gsap.to($("footer"), {duration: 0.3, opacity:0, delay:0, ease:Power2.easeInOut});
			});
		} else if ($("body").hasClass("disable-ajaxload")) {
			$('#page-nav .page-title').on('click', function() {					
				$("body").addClass("load-next-page");
				$("body").addClass("show-loader");
				$('header').removeClass('white-header');
				$("#app").remove();
				$(".big-title-caption").remove();	
					
				gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball p').remove();
				$('#ball i').remove();
				
				gsap.to($("#main-page-content, #hero, #page-nav"), {duration: 0.3, opacity:0});
				gsap.to($("footer"), {duration: 0.3, opacity:0, delay:0, ease:Power2.easeInOut});
			});
		}
		
		
		// Project Page Navigation Load Events
		$("#project-nav .next-ajax-link-project").mouseenter(function(e) {	
			var $this = $(this);		
			$( "#ball" ).append( '<p class="first">' + $this.data("firstline") + '</p>' + '<p>' + $this.data("secondline") + '</p>' );
			gsap.to('#ball', {duration: 0.3, borderWidth: '2px', scale: 1.2, borderColor:$this.data('color'), backgroundColor:$this.data('color')});			
			gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 2, left: 2});
			$("#project-nav .next-hero-title").addClass('hover-title');				
		});
						
		$("#project-nav .next-ajax-link-project").mouseleave(function(e) {
			gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
			gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
			$('#ball p').remove();
			$("#project-nav .next-hero-title").removeClass('hover-title');
		});	
		
		if (!$("body").hasClass("disable-ajaxload")) {
			$('.next-ajax-link-project').on('click', function() {					
				$("body").addClass("load-project-thumb-with-title").addClass("show-loader");
				$(".next-hero-title").removeClass("hover-title");				
				
				$('header').removeClass('white-header');
				$("#app").remove();
				
					$('.next-project-image-wrapper').addClass("temporary").appendTo('body');
					if ($(this).parents('#project-nav').hasClass("change-header")) {
						$("body").append('<div class="temporary-hero"><div class="outer content-max-width"><div class="inner"></div></div></div>');
					} else {
						$("body").append('<div class="temporary-hero light-content"><div class="outer content-max-width"><div class="inner"></div></div></div>');
					}
					$('.next-caption').appendTo('.temporary-hero .inner');	
					
				gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball p').remove();
				$('#ball i').remove();
				
				gsap.to($("#main-page-content, #hero, #hero-image-wrapper"), {duration: 0.3, opacity:0});			
				gsap.to($(".next-project-image"), {duration: 0.6, scale:1, opacity: 1, ease:Power2.easeOut,onComplete: function() {
				  $('.next-project-image').addClass("visible")
				}});
				gsap.to($("footer, .all-works"), {duration: 0.3, opacity:0, ease:Power2.easeInOut});						
			});
		} else if ($("body").hasClass("disable-ajaxload")) {
			$('.next-ajax-link-project').on('click', function() {					
				$("body").addClass("load-project-thumb-with-title").addClass("show-loader");
				$(".next-hero-title").removeClass("hover-title");				
				
				$('header').removeClass('white-header');
				$("#app").remove();
					
				gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball p').remove();
				$('#ball i').remove();
				
				gsap.to($("#main-page-content, #hero, #hero-image-wrapper, #project-nav"), {duration: 0.3, opacity:0});			
				gsap.to($(".next-project-image"), {duration: 0.6, scale:1, opacity: 0, ease:Power2.easeOut,onComplete: function() {
				  
				}});
				gsap.to($("footer, .all-works"), {duration: 0.3, opacity:0, ease:Power2.easeInOut});							
			});
		}
		
	}// Page Load Actions
	
	

	
/*--------------------------------------------------
Function Lazy Load
---------------------------------------------------*/

	function LazyLoad() {	
		
		gsap.set($("#show-filters, #counter-wrap"), {opacity:0, delay:0});
		
		$('body').waitForImages({
			finished: function() {
				$('body').removeClass('loading')
				setTimeout( function(){	
					$('body').removeClass('hidden').removeClass('scale-up').removeClass('scale-none');
				} , 1500 );
			},
			waitForAll: true
		});	
		
		$('body').waitForImages({
			finished: function() {
				gsap.to($("#header-container, .header-middle"), {duration: 1, force3D:true, opacity:1, ease:Power2.easeOut});				
			},
			waitForAll: true
		});
		
		if( !$('#canvas-slider').hasClass("active")) {	
			gsap.set($('#canvas-slider'), {opacity:0, scale:1.1});
			gsap.to($('#canvas-slider'), {duration: 1, force3D:true, opacity:1, scale:1, delay:0.3, ease:Power2.easeOut});
		}
		
		gsap.to($("#main"), {duration: 0.3, opacity:1, delay:0.1, ease:Power2.easeOut});
		gsap.to($("#footer-container"), {duration: 1, force3D:true, opacity:1, delay:0.4, ease:Power2.easeOut});		
		
		if( $('#hero').hasClass("has-image")) {	
			if( $('body').hasClass("load-project-thumb-with-title")) {
				if ($('body').hasClass('hero-below-caption')) {
					var heroTranslate = $('.hero-translate').height();
					gsap.set($("#hero-image-wrapper"), {y:heroTranslate});					
				}
				gsap.to($("#hero-bg-image"), {duration: 0, force3D:true, scale:1 , opacity:1, delay:0, ease:Power2.easeOut});				
				gsap.to($(".hero-title span"), {duration: 0, force3D:true, y: 0, opacity:1, delay:0, ease:Power2.easeOut});
				gsap.to($(".hero-subtitle span"), {duration: 0, force3D:true, y:0, opacity:1, delay:0, ease:Power2.easeOut});
				gsap.to($(".hero-footer-left"), {duration: 0.7, force3D:true, y: 0, opacity:1, rotation:0, delay:0.9, ease:Power2.easeOut});
				gsap.to($(".hero-footer-right"), {duration: 0.7, force3D:true, y:0, opacity:1, rotation:0, delay:1, ease:Power2.easeOut});		
			} else if( $('body').hasClass("load-project-thumb-with-title-and-scale")) {
				gsap.to($("#hero-bg-image"), {duration: 0, force3D:true, scale:1.02, opacity:1, delay:0, ease:Power2.easeOut});				
				gsap.to($(".hero-title span"), {duration: 0, force3D:true, y: 0, opacity:1, delay:0, ease:Power2.easeOut});
				gsap.to($(".hero-subtitle span"), {duration: 0, force3D:true, y:0, opacity:1, delay:0, ease:Power2.easeOut});
				gsap.to($(".hero-footer-left"), {duration: 0.7, force3D:true, y: 0, opacity:1, rotation:0, delay:0.9, ease:Power2.easeOut});
				gsap.to($(".hero-footer-right"), {duration: 0.7, force3D:true, y:0, opacity:1, rotation:0, delay:1, ease:Power2.easeOut});		
			} else if( $('body').hasClass("load-project-thumb")) {
				if ($('body').hasClass('hero-below-caption')) {
					var heroTranslate = $('.hero-translate').height();
					gsap.set($("#hero-image-wrapper"), {y:heroTranslate});
					gsap.to($(".hero-title span"), {duration: 0.7, force3D:true, y: 0, opacity:1, rotation:0, delay:0.6, ease:Power2.easeOut});
					gsap.to($(".hero-subtitle span"), {duration: 0.7, force3D:true, y:0, opacity:1, rotation:0, delay:0.9, ease:Power2.easeOut});
				} else {
					gsap.to($(".hero-title span"), {duration: 0.7, force3D:true, y: 0, opacity:1, rotation:0, delay:0.6, ease:Power2.easeOut});
					gsap.to($(".hero-subtitle span"), {duration: 0.7, force3D:true, y:0, opacity:1, rotation:0, delay:0.9, ease:Power2.easeOut});	
				}
				gsap.to($("#hero-bg-image"), {duration: 0, force3D:true, scale:1.02 , opacity:1, delay:0, ease:Power2.easeOut});						
				
				gsap.to($(".hero-footer-left"), {duration: 0.7, force3D:true, y: 0, opacity:1, rotation:0, delay:1.1, ease:Power2.easeOut});
				gsap.to($(".hero-footer-right"), {duration: 0.7, force3D:true, y:0, opacity:1, rotation:0, delay:1.2, ease:Power2.easeOut});			
			} else {
				gsap.to($("#hero-bg-image"), {duration: 0, force3D:true, scale:1 , opacity:1, delay:0, ease:Power2.easeOut});
				gsap.to($(".hero-title span"), {duration: 0.7, force3D:true, y: 0, opacity:1, rotation:0, delay:0.6, ease:Power2.easeOut});
				gsap.to($(".hero-subtitle span"), {duration: 0.7, force3D:true, y:0, opacity:1, rotation:0, delay:0.9, ease:Power2.easeOut});
				gsap.to($(".hero-footer-left"), {duration: 0.7, force3D:true, y: 0, opacity:1, rotation:0, delay:1.1, ease:Power2.easeOut});
				gsap.to($(".hero-footer-right"), {duration: 0.7, force3D:true, y:0, opacity:1, rotation:0, delay:1.2, ease:Power2.easeOut});	
			}
			gsap.to($("#main-page-content"), {duration: 0.4, opacity:1, delay:0.95, ease:Power2.easeOut});
		} else {
			var tlHerospan = gsap.timeline();
			tlHerospan.set($("#hero .hero-title span"), {y: 60, opacity:0});
			$("#hero .hero-title span").each(function(index, element) {
				tlHerospan.to(element, {duration: 0.7, y:0, opacity:1, delay:0.25, ease:Power3.easeOut}, index * 0.05)
			});
			gsap.to($(".hero-subtitle span"), {duration: 0.4, force3D:true, y: 0, opacity:1, rotation:0, delay:0.1, ease:Power2.easeOut});
			gsap.to($(".hero-footer-left"), {duration: 0.7, force3D:true, y: 0, opacity:1, rotation:0, delay:0.5, ease:Power2.easeOut});
			gsap.to($(".hero-footer-right"), {duration: 0.7, force3D:true, y:0, opacity:1, rotation:0, delay:0.6, ease:Power2.easeOut});
			gsap.to($("#main-page-content, #page-nav"), {duration: 0.5, opacity:1, delay:0.35, ease:Power2.easeOut});
			gsap.to($(".post-article-wrap"), {duration: 0.4, force3D:true, y: 0, opacity:1, ease:Power2.easeOut});
			gsap.to($(".error-button"), {duration: 0.4, force3D:true, y: 0, opacity:1, rotation:0, delay:0.2, ease:Power2.easeOut});
		}	
		
		// Fading In Showcase Slider on Finised
		gsap.set($("#showcase-slider-holder"), {opacity:0});
		gsap.to($("#showcase-slider-holder"), {duration: 0.3, opacity:1, delay:0, ease:Power2.easeOut});
		gsap.to($("#showcase-slider-holder .swiper-slide .slide-title span"), {duration: 1, force3D:true, y: 0, opacity:1, delay:0.6, ease:Power2.easeOut});
		gsap.to($("#showcase-slider-holder .swiper-slide .subtitle span"), {duration: 0.7, force3D:true, y: 0, opacity:1, delay:1, ease:Power2.easeOut});
		
		// Fading In Showcase Carousel on Finised
		gsap.set($("#showcase-carousel-holder"), {opacity:0});
		gsap.to($("#showcase-carousel-holder"), {duration: 0.3, opacity:1, delay:0.3, ease:Power2.easeOut});
		var slideWidth = $("#showcase-carousel-holder .swiper-slide").width();
		gsap.set($("#showcase-carousel-holder .swiper-slide-active").prev(), {x:slideWidth, scale:0.8, opacity:0});
		gsap.set($("#showcase-carousel-holder .swiper-slide-active").next(), {x:-slideWidth, scale:0.8, opacity:0});								
		gsap.to($("#showcase-carousel-holder .swiper-slide-active").prev(), {duration: 2, x:0, scale:1, delay:0.2, opacity:1, ease:Power3.easeInOut});
		gsap.to($("#showcase-carousel-holder .swiper-slide-active").next(), {duration: 2, x:0, scale:1, delay:0.2, opacity:1, ease:Power3.easeInOut});
		gsap.to($("#showcase-carousel-holder .swiper-slide .slide-title span"), {duration: 0.3, force3D:true, y: 0, opacity:1, delay:0, ease:Power2.easeOut});
		gsap.to($("#showcase-carousel-holder .swiper-slide .subtitle span"), {duration: 0.3, force3D:true, y: 0, opacity:1, delay:0, ease:Power2.easeOut});
		
		gsap.set($(".swiper-prev, .swiper-next, #showcase-border"), {opacity:0});		
		gsap.to($(".swiper-prev, .swiper-next, .swiper-pagination-bullet"), {duration: 0.7, y: 0, opacity:1, delay:1.2, ease:Power2.easeOut});
		
		var tlSmallTitles = gsap.timeline();					
		$(".slide-small-title span").each(function(index, element) {
			tlSmallTitles.to(element, {duration: 0.5, force3D:true, y:0, opacity:1, delay:1, ease:Power2.easeOut}, index * 0.05)
		});
		// Fading In Floating Lists 
		var SlideListTitle = gsap.timeline();					
		$(".sl-title span, .split-title span").each(function(index, element) {
			SlideListTitle.to(element, {duration: 0.7, force3D:true, y:0, opacity:1, delay:0.5, ease:Power2.easeOut}, index * 0.05)
		});		
		var SlideListSubtitle = gsap.timeline();					
		$(".sl-subtitle span, .split-subtitle span").each(function(index, element) {
			SlideListSubtitle.to(element, {duration: 0.7, force3D:true, y:0, opacity:1, delay:0.6, ease:Power2.easeOut}, index * 0.05)
		});
		
		setTimeout( function(){
			$('.slide-list').addClass('show-borders')
		} ,300 );
		
		
		
		if( $('.load-project-thumb').length > 0 ){
			$('#hero-image-wrapper').waitForImages({
				finished: function() {
					setTimeout( function(){
						$('#hero-image-wrapper').find('video').each(function() {
							$(this).get(0).play();
						});
						$("#app.active").remove();
						$(".big-title-caption").remove();
						$('.thumb-container').remove();				
					} ,250 );
				},
				waitForAll: true
			});
		} else if( $('.load-project-thumb-with-title').length > 0 ){
			$('#hero-image-wrapper').waitForImages({
				finished: function() {
					setTimeout( function(){
						$('#hero-image-wrapper').find('video').each(function() {
							$(this).get(0).play();
						});
						$("#app.active").remove();
						$('.thumb-container').remove();	
						$("#canvas-slider.active").remove();
						$(".temporary-hero").remove();
						gsap.to($(".next-project-image-wrapper.temporary"), {duration: 0.3, opacity: 0, ease:Power2.easeOut,onComplete: function() {
        					$(".next-project-image-wrapper.temporary").remove();
						}});
						$('body').removeClass("load-project-thumb-with-title").removeClass("show-loader");	
					} , 500 );
				},
				waitForAll: true
			});			
		} else if( $('.load-project-thumb-with-title-and-scale').length > 0 ){
			$('#hero-image-wrapper').waitForImages({
				finished: function() {
					setTimeout( function(){
						$('#hero-image-wrapper').find('video').each(function() {
							$(this).get(0).play();
						});
						$("#app.active").remove();
						$('.thumb-container').remove();	
						$("#canvas-slider.active").remove();
						$(".temporary-hero").remove();
						gsap.to($(".next-project-image-wrapper.temporary"), {duration: 0.3, opacity: 0, ease:Power2.easeOut,onComplete: function() {
        					$(".next-project-image-wrapper.temporary").remove();
						}});
						$('body').removeClass("load-project-thumb-and-title").removeClass("show-loader");	
					} , 500 );
				},
				waitForAll: true
			});	
		} else {
			$('#hero-image-wrapper').waitForImages({
				finished: function() {
					$('#hero-image-wrapper').find('video').each(function() {
						$(this).get(0).play();
					});
					$("#app.active").remove();
					$('.thumb-container').remove();	
					$("#canvas-slider.active").remove();
				},
				waitForAll: true
			});
		}
		
		setTimeout( function(){	
			$('header').removeClass('white-header');
			$('body').removeClass("load-project-page").removeClass("load-project-thumb").removeClass("load-next-project").removeClass("load-next-page");
			setTimeout( function(){	
				$('body').removeClass("load-project-thumb-with-title").removeClass("show-loader");
			} , 300 );			
		} , 800 );
		
	
	}// End Lazy Load
	
	
	
/*--------------------------------------------------
Function Floating Lists
---------------------------------------------------*/

	function InfinityLists() {
		
		if( $('.infinity-lists-holder').length > 0 ){
			
			function duplicateChildNodes (parentId){
				
				var parent = document.getElementById(parentId);
				
				if( parent != null ){
					
					NodeList.prototype.forEach = Array.prototype.forEach;
					
					let length = parent.children.length;
					if( length < 12 ){
						
						let children = Array.from( parent.children );
												
						while ( parent.children.length < 12 ) {
						
							for (let idx = 0; idx < children.length; idx++) {
								
								var cln = children[idx].cloneNode(true);
								parent.appendChild(cln);
							}
						
						}
					}
										
				}
			};
			
			duplicateChildNodes("itemsWrapper");
			
			$("footer").addClass("showcase-footer");			
				
			let SCROLL_SPEED_COEFFICIENT = 0;
						
			var browserName = (function (agent) {        switch (true) {
				case agent.indexOf("edge") > -1: return SCROLL_SPEED_COEFFICIENT = 1;
				case agent.indexOf("edg/") > -1: return SCROLL_SPEED_COEFFICIENT = 5;
				case agent.indexOf("opr") > -1 && !!window.opr: return "Opera";
				case agent.indexOf("chrome") > -1 && !!window.chrome: return SCROLL_SPEED_COEFFICIENT = 0.7;
				case agent.indexOf("trident") > -1: return SCROLL_SPEED_COEFFICIENT = 1;
				case agent.indexOf("firefox") > -1: return SCROLL_SPEED_COEFFICIENT = 2.2;
				case agent.indexOf("safari") > -1: return SCROLL_SPEED_COEFFICIENT = 1;
				default: return SCROLL_SPEED_COEFFICIENT = 1;
			}})(window.navigator.userAgent.toLowerCase());
			
			const PIXELS_PER_LINE = 10;
			const PIXELS_PER_PAGE = 100;	   
			
			var normalizedDelta = 0;
			
			var wrapper 		= document.querySelector(".infinity-lists-wrapper");
			var right 			= document.querySelector(".swiper-next");
			var left 			= document.querySelector(".swiper-prev");
			var boxes 			= document.querySelectorAll(".infinity-list");
			var boxesImages 	= document.querySelectorAll(".hover-reveal");
			
			var boxHeightValue 	= document.querySelector('.infinity-list');
			var boxHeight 		= boxHeightValue.clientHeight;
			var imgHeight 		= boxHeight;
			var wrapHeight 		= boxes.length * boxHeight;
			var viewHeight 		= wrapper.offsetHeight;
			var winHeight 		= $(window).height();
			
			gsap.set(wrapper, {height: winHeight});
			
			for (var i = 0; i < boxes.length; i++) {
			  let box = boxes[i];
			  gsap.set(box, {y: i * boxHeight, top: -boxHeight });
			}
			
			for (var i = 0; i < boxesImages.length; i++) {
			  let boxImg = boxesImages[i];
			  gsap.set(boxImg, {y: -i * boxHeight,  });
			}
			
			var wrapProgress 	= gsap.utils.wrap(0, 1);
			var snapBox 		= gsap.utils.snap(boxHeight);
			var clickAnimation 	= gsap.set({}, {});
			var scrollAnimation	= gsap.set({}, {});
			var proxy 			= document.createElement("div");
			var props 			= gsap.getProperty(proxy);
			
			var animation = gsap.to(".infinity-list", {
			  duration: 1,
			  y: "+=" + wrapHeight,
			  ease: Linear.easeNone,
			  paused: true,
			  repeat: -1,
			  modifiers: {
				y: function(y, target) {
				  y = parseFloat(y) % wrapHeight;
				  return y + "px";
				}
			  }
			}).progress(1 / boxes.length);
			
			var animationImages = gsap.to(".hover-reveal", {
			  duration: 1,
			  y: "-=" + wrapHeight,
			  ease: Linear.easeNone,
			  paused: true,
			  repeat: -1,
			  modifiers: {
				y: function(y, target) {
				  y = parseFloat(y) % wrapHeight;
				  return y + "px";
				}
			  }
			}).progress(1 / boxes.length);
			
			gsap.set(proxy, {y: boxHeight});
			
			if (isMobile()) {			
				Draggable.create(proxy, {
				  type: "y", 
				  trigger: ".infinity-lists-holder",
				  throwProps: true,
				  onDrag: updateProgress,
				  onThrowUpdate: updateProgress,
				  onDragEnd: function(e){
					e.stopImmediatePropagation();
					e.stopPropagation();
					e.preventDefault();
				  },
				  snap: {
					y: snapBox
				  }
				});	
						
			}
			
			left.addEventListener('click', animateCarousel.bind(null, -1));
			right.addEventListener('click', animateCarousel.bind(null, 1));
			
			function updateProgress() {  
			  animation.progress(wrapProgress(props("y") / wrapHeight));
			  animationImages.progress(wrapProgress(props("y") / wrapHeight));				  
			}
			
			function animateCarousel(direction) {
			  
			  clickAnimation.kill();
			  
			  clickAnimation = gsap.to(proxy, {
				duration: 0.2,
				y: snapBox(props("y") - direction * boxHeight),
				onUpdate: updateProgress
			  });  
			}
			
			
			function animateScrollCarousel(delta) {
			  
				scrollAnimation.kill();
			  
				normalizedDelta += delta; 
	
				var snapTo = snapBox( props("y") - normalizedDelta * SCROLL_SPEED_COEFFICIENT );
				if( Math.abs( snapTo - props("y") ) > boxHeight ){

					normalizedDelta = 0;
				}
					
				scrollAnimation = gsap.to(proxy, {
					duration: 1,
					ease:Power4.easeOut,
					y: snapTo,
					onUpdate: updateProgress
				});  
			}
			
			const el = document.querySelector('.infinity-lists-holder');
			el.onwheel = scrollList;
			function scrollList( event ) {			
				
				event.preventDefault();
	  
				var deltaY = event.deltaY;
				//convert the values to pixels if necessary
				if( event.deltaMode == WheelEvent.DOM_DELTA_LINE ){
		  
					deltaY = event.deltaY * PIXELS_PER_LINE;
				}
				if( event.deltaMode == WheelEvent.DOM_DELTA_PAGE ){
		  
					deltaY = event.deltaY * PIXELS_PER_PAGE;
				}
				
				animateScrollCarousel( deltaY );
			}


			if (!isMobile()) {	
			
				$('.hover-reveal').each(function(){
					var $this = $(this);
					var $childWidth = $(this).width()/2;			
					var $parentWidth = $(this).parent().width()/2;
					var $marginLeft = parseInt($(this).parent().css('margin-left'))/2;
					var $marginRight = parseInt($(this).parent().css('margin-right'))/2;
					gsap.set($this, {x:$parentWidth - $childWidth - $marginLeft + $marginRight});	
				});
				
				const getMousePos = (e) => {
					let posx = 0;
					let posy = 0;
					if (!e) e = window.event;
					if (e.pageX || e.pageY) {
						posx = e.pageX;
						posy = e.pageY;
					}
					else if (e.clientX || e.clientY) 	{
						posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
						posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
					}
					return { x : posx, y : posy }
				}
			
				// Effect 1
				class HoverImgFx1 {
					constructor(el) {
						this.DOM = {el: el};
						this.DOM.reveal = this.DOM.el.querySelector('.hover-reveal');				
						this.DOM.revealInner = this.DOM.reveal.querySelector('.hover-reveal__inner');
						this.DOM.revealInner.style.overflow = 'hidden';
						this.DOM.revealImg = this.DOM.revealInner.querySelector('.hover-reveal__img');
						this.initEvents();
					}
					initEvents() {	
						this.positionElement = (ev) => {
							
							
							const mousePos = getMousePos(ev);							
							gsap.to($('.hover-reveal'), { duration: 1, top: `${mousePos.y+16}px`, left: mousePos.x - window.innerWidth/2, ease:Power4.easeOut });
						};
						this.mouseenterFn = (ev) => {
							this.positionElement(ev);
							this.showImage();
						};
						this.mousemoveFn = ev => requestAnimationFrame(() => {
							this.positionElement(ev);
						});
						this.mouseleaveFn = () => {
							this.hideImage();
						};
						
						this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
						this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
						this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
					}
					showImage() {
						gsap.killTweensOf(this.DOM.revealInner);
						gsap.killTweensOf(this.DOM.revealImg);
			
						this.tl = gsap.timeline({
							onStart: () => {
								this.DOM.reveal.style.opacity = 1;
								gsap.set(this.DOM.el, {zIndex: 1000});
							}
						})
						.add('begin')
						.add(gsap.to(this.DOM.revealInner, {
							duration: 0.4,
							ease: Sine.easeOut,
							startAt: {x: '-100%'},
							x: '0%'
						}), 'begin')
						.add(gsap.to(this.DOM.revealImg, {
							duration: 0.4,
							ease: Sine.easeOut,
							startAt: {x: '100%'},
							x: '0%'
						}), 'begin');
					}
					hideImage() {
						gsap.killTweensOf(this.DOM.revealInner);
						gsap.killTweensOf(this.DOM.revealImg);
			
						this.tl = gsap.timeline({
							onStart: () => {
								gsap.set(this.DOM.el, {zIndex: 999});
							},
							onComplete: () => {
								gsap.set(this.DOM.el, {zIndex: ''});
								gsap.set(this.DOM.reveal, {opacity: 0});
							}
						})
						.add('begin')
						.add(gsap.to(this.DOM.revealInner, {
							duration: 0.4,
							ease: Sine.easeOut,
							x: '100%'
						}), 'begin')
						
						.add(gsap.to(this.DOM.revealImg, {
							duration: 0.4,
							ease: Sine.easeOut,
							x: '-100%'
						}), 'begin');
					}
				}
				
				Array.from(document.querySelectorAll('.infinity-list')).forEach(link => new HoverImgFx1(link));
				
				
				$('.infinity-list').on('mouseenter', function() {
					$('.infinity-list').addClass('disable');
					$(this).removeClass('disable');
					$(this).find('video').each(function() {
						$(this).get(0).play();
					});
				}).on('mouseleave', function() {
					$('.infinity-list').removeClass('disable');
					$(this).find('video').each(function() {
						$(this).get(0).pause();
					});
				});
			}



			
		}
		
		
	}// End Floating Lists		
	
	

	window.LoadViaAjax = function() {		
		
		FirstLoad();
		ScrollEffects();
		PageLoadActions();
		InfinityLists();
		FitThumbScreenGSAP();
		FitThumbScreenWEBGL();		
		LazyLoad();			
		Shortcodes();
		Sliders();
		JustifiedGrid();
		Lightbox();
		PlayVideo();
		ContactForm();
		ContactMap();
		CustomFunction();
	
	}//End Load Via Ajax

});

var LoadViaAjax = window.LoadViaAjax;
	
	

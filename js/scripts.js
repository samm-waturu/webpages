jQuery(document).ready(function(){
    
    'use strict';

    //disable and enable scroll
    function disable_scroll() {
        jQuery("html, body").addClass('locked');
        jQuery("body").addClass("margin-fix");
        jQuery(".menu-btn.fixed").addClass("menu-fix");
    }
    
    function enable_scroll() {
        jQuery("html, body").removeClass('locked');
        jQuery("body").removeClass("margin-fix");
        jQuery(".menu-btn.fixed").removeClass("menu-fix");
    }
    //disable and enable scroll
    
    
    //get scrollbar width
    function scrollbarWidth() {
        var block = jQuery('<div>').css({'height':'50px','width':'50px'}),
            indicator = jQuery('<div>').css({'height':'200px'});

        jQuery('body').append(block.append(indicator));
        var w1 = jQuery('div', block).innerWidth();    
        block.css('overflow-y', 'scroll');
        var w2 = jQuery('div', block).innerWidth();
        jQuery(block).remove();
        return (w1 - w2);
    }
    
    if (scrollbarWidth() !== 0) {
        jQuery("head").append('<style>'+
            '.margin-fix {margin-right: '+scrollbarWidth()+'px;}'+
            '.margin-fix .overflow-hidden-fix {width: auto !important; right: '+scrollbarWidth()+'px !important;}'+
            '.menu-fix {transform: translateX(-'+scrollbarWidth()+'px);}'+
            '</style>');
    }
    //get scrollbar width
    
    jQuery("#js-menu-btn").on("click", function(e){
        e.preventDefault();
        
        jQuery("#js-menu-section").addClass("opened");
        disable_scroll();
    });
    
    jQuery("#js-menu-close").on("click", function(e){
        e.preventDefault();
        
        jQuery("#js-menu-section").removeClass("opened");
        enable_scroll();
    });
    
    //Slider "other posts"
    if (jQuery("#js-bg-image-slider").length) {
        
        jQuery('#js-bg-image-slider').slick({
            arrows: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            fade: true,
            focusOnSelect: false,
            swipe: true,
            touchMove: false,
            draggable: false,
            autoplay: false,
            centerMode: false,
            speed: 400,
            prevArrow: jQuery('.main-screen-arrows .arrow.prev'),
            nextArrow: jQuery('.main-screen-arrows .arrow.next')
        });
        
        var slidesCount = jQuery("#js-bg-image-slider .slide").length;
        
        if (slidesCount<10) {
            slidesCount = '0'+slidesCount;
        }
        
        jQuery(".main-screen-arrows .total").text(slidesCount);
        
        jQuery('#js-bg-image-slider').on('beforeChange', function(event, 
         slick, currentSlide, nextSlide){
            var nextSlide = jQuery(slick.$slides[nextSlide]);
            var nextSlideIndex = nextSlide.index() + 1;
            
            if (nextSlideIndex<10) {
                nextSlideIndex = '0'+nextSlideIndex;
            }
            
            jQuery(".main-screen-arrows .current").text(nextSlideIndex);
        });
    }
    //Slider "other posts"
    
    
    //fixed mobile height
    if (!device.desktop()) {
        jQuery("body").append("<div id='setHeight' style='position:fixed; top:0; bottom:0;left:0;right:0;z-index:-10'></div>")
        var activeHeight = jQuery("#setHeight").innerHeight();
        jQuery("#setHeight").remove();


        jQuery(".js-mobile-fix-height").innerHeight(activeHeight);
    }
    //fixed mobile height
    
    
    //Collection sliders
    jQuery('.collections-slider').each(function(key, item) {
     
      var sliderIdName = 'collections-slider' + key;
      this.id = sliderIdName;
      var sliderId = '#' + sliderIdName;

      jQuery(sliderId).slick({
        arrows: true,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            fade: false,
            focusOnSelect: false,
            swipe: true,
            touchMove: false,
            draggable: false,
            autoplay: false,
            variableWidth: true,
            centerMode: false,
            speed: 400,
            responsive: [
            {
              breakpoint: 760,
              settings: {
                  slidesToShow: 1
              }
            }
          ]
       });
    });
    //Collection sliders
    
    //Play btn
    jQuery(".js-video-play-btn").on("click", function(){
        var thisBtn = jQuery(this),
            thisVideo = thisBtn.next("video");
        
        thisBtn.hide();
        thisVideo.get(0).play();
        thisVideo.prop("controls", true);
    });
    //Play btn/
    
    //input placeholder function
    jQuery("input.input[placeholder], textarea.input[placeholder]").each(function() {
        var thisInput = jQuery(this);
        
        if (thisInput.val() !== "") {
            thisInput.parent().addClass("active");
            thisInput.prev("label").addClass("active");
        }
    });
    
    jQuery('input.input[placeholder], textarea.input[placeholder]').placeholderLabel();
    //input placeholder function
    
    
    //Lightgallery function
    if (jQuery(".lightgallery-on").length) {
        jQuery(".lightgallery-on").each(function(){
           var thisGallery = jQuery(this),
               galleryImage = thisGallery.find("img");
            
            
            thisGallery.addClass("lightgallery");
        });
        
        jQuery(".lightgallery").each(function(){
            var childrenElement = jQuery(this).children();
            
            
            childrenElement.each(function(){
                var thisImgSrc = jQuery(this).find("img").attr("src");
                jQuery(this).attr("href", thisImgSrc);
            });
            
            
        })
    }
    
    jQuery('.lightgallery').lightGallery({
        counter: false,
        enableDrag: false,
        enableSwipe: true,
        mousewheel: false,
        speed: 200
    });
    
    jQuery('.lightgallery').on('onBeforeOpen.lg',function(event){
        disable_scroll();
    });
    
    jQuery('.lightgallery').on('onCloseAfter.lg',function(event){
        enable_scroll();
    });
    //Lightgallery function
    
    
    //temp
    jQuery(".js-form-success-status").on('click', function(e) {
        e.preventDefault();
        jQuery("#success-message").addClass("visible");
        
        setTimeout(function() {
            jQuery("#success-message").removeClass("visible");
        }, 2000);
    });
    
    jQuery(".js-form-error-status").on('click', function(e) {
        e.preventDefault();
        jQuery("#error-message").addClass("visible");
        
        setTimeout(function() {
            jQuery("#error-message").removeClass("visible");
        }, 2000);
    });
});	

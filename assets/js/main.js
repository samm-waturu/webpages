"use strict";

// Open & Close Aside Navigation

const openNav = document.querySelector(".open-nav");
const closeNav = document.querySelector(".close-nav");
const responsiveNav = document.querySelector(".responsive-nav-container");

openNav.addEventListener("click", function(){
	responsiveNav.classList.add("active");
})

closeNav.addEventListener("click", function(){
	responsiveNav.classList.remove("active");
})

const body = document.body,
        jsScroll = document.getElementsByClassName('js-scroll')[0],
        height = jsScroll.getBoundingClientRect().height - 1,
        speed = 0.05
    let offset = 0
    body.style.height = Math.floor(height) + "px"

    function Scroll() {
        offset += (window.pageYOffset - offset) * speed
        let scroll = "translateY(-" + offset + "px) translateZ(0)"
        jsScroll.style.transform = scroll
        let raf = requestAnimationFrame(Scroll)
    }

    Scroll()



let previews = {};
document.querySelectorAll(".entry-thumbs > div").forEach(
	function(element) {
		previews[element.getAttribute('data-entry-thumb')] = element;
	}
)
document.querySelectorAll('.entries-list div h1').forEach(
	function(element) {
		element.addEventListener('mouseover', function(e) {
			let selectedIndex = element.getAttribute("data-entry-link");

			document.querySelector('.entries-list .active').classList.remove("active");
			element.childNodes[0].classList.add("active");

			document.querySelector('.entry-thumbs .active').classList.remove("active");
			previews[selectedIndex].classList.add("active");
		})
	}
)

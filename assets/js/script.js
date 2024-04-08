'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

var icon = document.getElementById("icon");

icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src = "/assets/images/sun.png";

  }else{
    icon.src = "/assets/images/moon.png";
  }
}


const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");s
    goTopBtn.classList.remove("active");
  }

});

// var icon = document.getElementById("icon");



const popular = document.getElementById('popular-list');
const card = document.getElementById('popular-card');
const img = document.getElementById('card-img')
const videos = videoContainer.querySelectorAll('video');





videos.forEach(video => {
  video.addEventListener('click', () => {
    videos.forEach(vid => {
      if (vid !== video) {
        vid.pause();
      }
    });
  });
});




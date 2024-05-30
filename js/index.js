function HideOnScroll(params) {
    var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (currentScrollPos === 0) {
    document.querySelector(".nav__menu").style.top = "0";
} else if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav__menu").style.top = "0";
} else {
    document.querySelector(".nav__menu").style.top = "-100px";
}
  prevScrollpos = currentScrollPos;
}
}

HideOnScroll()



const themeButton = document.getElementById('nav__theme')
const imgFilterStyles = document.querySelectorAll('.img-filter')
const footerAdaIcon = document.querySelector('.footer__img')
if(!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'dark')

}

checkThemeIcon()

themeButton.addEventListener("click", () => {
    console.log("helwo kkfwkfw");
    if(localStorage.getItem('theme') === 'dark') {
        localStorage.setItem('theme', 'light')
    }
    else {
        localStorage.setItem('theme', 'dark')
    }
    checkThemeIcon();
    
})

function checkThemeIcon() {
    if(localStorage.getItem('theme') === 'dark') {
        themeButton.src = 'media/icon/sun-regular.svg'
        footerAdaIcon.src = 'media/ada_logo_color.png'
        document.documentElement.style.setProperty('--background', '#FFFEF0');
        document.documentElement.style.setProperty('--text-primary', '#C5D5E5');
        document.documentElement.style.setProperty('--text-hover', '#8fa5bb');
        document.documentElement.style.setProperty('--text-secondary', '#03045E');
        console.log(themeButton.src)
        imgFilterStyles.forEach(item => {
            item.style.filter = 'invert(97%) sepia(93%) saturate(704%) hue-rotate(174deg) brightness(93%) contrast(92%)'
        })
        
    }
    else {
        themeButton.src = 'media/icon/moon-regular.svg'
        footerAdaIcon.src = 'media/ada_logo_white.png'
        document.documentElement.style.setProperty('--background', '#2C3333');
        document.documentElement.style.setProperty('--text-primary', '#A5C9CA');
        document.documentElement.style.setProperty('--text-hover', '#738e8f');
        document.documentElement.style.setProperty('--text-secondary', '#E7F6F2');
        imgFilterStyles.forEach(item => {
            item.style.filter = 'invert(99%) sepia(61%) saturate(442%) hue-rotate(105deg) brightness(82%) contrast(91%)'
        })
    }
}

// this is code for transitioning between pages

document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.remove("fade-out");
  });
  
  document.addEventListener("click", function (e) {
    if (e.target.tagName === "A" && e.target.getAttribute("href").endsWith(".html")) {
      e.preventDefault();
      const targetPage = e.target.getAttribute("href");
      document.body.classList.add("fade-out");
      setTimeout(function () {
        window.location.href = targetPage;
      }, 250); 
    }
  });
  



window.onscroll=function(){
    navFix();
  }
  navbar = document.getElementById('nav_top');
  function navFix(){
    if (window.pageYOffset > 50){
      navbar.classList.add('fixed')
    }
    else{
      navbar.classList.remove('fixed')
    }
  };

  document.querySelector(".menu_bar").onclick = function(){
    showMenu();
  };
  function showMenu(){
    document.querySelector(".menu-full").classList.add("showmenu");
    document.querySelector("body").classList.add("bodyoverlay");
  };

  document.querySelector(".menu_close").onclick = function(){
    hideMenu();
  };
  function hideMenu(){
    document.querySelector(".menu-full").classList.remove("showmenu");
    document.querySelector("body").classList.remove("bodyoverlay");
  };


//Page transition and loader
  window.addEventListener("load", () => {
    const homeMenuItem = document.getElementById("menu_list");
    const firstLiElement = homeMenuItem.querySelector("li");
    const loader = document.querySelector(".loader span");
  
    if (firstLiElement && firstLiElement.classList.contains("home-menu")) {
      loader.classList.add("icon-zoom-in");  
    } 
    else {
      document.querySelector(".loader").classList.add("loader-transit");
    }
    document.querySelector(".page").classList.add("page-transit");
  });


  //previouos loader
  // const root=document.documentElement;
  // const loader = document.querySelector(".loader");

  // const endTransition = () => {
  //   loader.addEventListener("transitionend", () => {
  //     loader.style.transform = "translateX(100%)";
  //     // root.classList.remove("disable-hover");
  //   });
  //   // loader.style.transform = "";
  // };

  // const startTransition = () => {
  //   loader.style.transform = "translateX(100%)";
  // };

  // window.addEventListener("load", () => {
  //   startTransition();
  //   document.querySelector(".page").classList.add("page-transit");
  // });
  // document.querySelector(".menu").addEventListener("click", () => {
  //   endTransition();
  //   document.querySelector(".page").classList.add("page-transit");
  // });



   //background progress on section scroll
   
  //  const progressBar = document.querySelector('.progressBar');
  //  const section = document.querySelector('.our-goal-zone');
   
  //  const scrollProgress = () => {
  //    let scrollDistance = ((section.getBoundingClientRect().top) - 0);
  //    let progressPercentage =
  //      (scrollDistance /
  //        (section.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
   
  //    let val = Math.floor(progressPercentage);
  //    progressBar.style.width = val + '%';
   
  //    if (val < 0) {
  //      progressBar.style.width = '0%';
  //    }
  //  };
   
  //  window.addEventListener('scroll', scrollProgress);
  

  
//background progress on section scroll
const mediaQuery = window.matchMedia('(min-width: 992px)')
   if (mediaQuery.matches) {
  const bgProgress = document.querySelector('.bgProgressBar');
  const goalBlock = document.querySelector('.our-goal-area');
  
  const scrollBgProgress = () => {
    
    let scrollBgDistance = ((goalBlock.getBoundingClientRect().top) - 250);
    let bgProgressPercentage =
      (scrollBgDistance /
        (goalBlock.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
  
    let val = Math.floor(bgProgressPercentage);
    bgProgress.style.width = val + '%';
  
    if (val < 0) {
      bgProgress.style.width = '0%';
    }
  };
  
  window.addEventListener('scroll', scrollBgProgress);
}

//   const scroll = new LocomotiveScroll({
//     el: document.querySelector(".o-scroll"),
//     smooth: true
// });
//   (function () {
//     var scroll = new LocomotiveScroll();
// })();


AOS.init({
  duration: 400,
  once: true,
  // mirror: true,
});